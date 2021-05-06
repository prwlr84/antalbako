class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def home
    gon.ip = request.remote_ip
    gon.watch.ranks = Rank.all.order("score DESC").first(10)
    gon.watch.work = Work.all
  end

  def ranks
    @ranks = gon.watch.ranks = Rank.all.order("score DESC").first(10)
    render json: @ranks
  end

  def msg(x)
    "<!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
            <style>
              /* Email styles need to be inline */
            </style>
          </head>

          <body style='background-color: red'>
            <div>THANKS FOR YOUR MAIL</div>
            <p>#{x}</p>
          </body>
        </html>"
  end

  def mail
    mailer = MailMailer.new
    mailer.mail(
      to: params[:email],
      body: msg(params[:message])
    ).deliver
    # @mail = Mail.new(mail_params)
    # raise
    # @mail.request = request

    if mailer.mail.deliver
      # re-initialize Home object for cleared form
      redirect_to "/connect"
    else
      puts "error"
    end
  end

  def create
    @rank = Rank.new(rank_params)
    @rank.save
  end


  private

  def rank_params
    params.permit(:score, :name, :country)
  end

  def mail_params
    params.permit(:subject, :name, :email, :message, :page_id)
  end
end
