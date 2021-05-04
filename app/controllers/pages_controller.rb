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

  def mail
    mailer = ActionMailer::Base.new
    mailer.mail(from: 'antal.bako@gmail.com', to: params[:email], subject: params[:subject], body: params[:message]).deliver
    puts mail_params

    # @mail = Mail.new(mail_params)
    # raise
    # @mail.request = request

  #   if mailer.deliver
  #     # re-initialize Home object for cleared form
  #     puts true , notice: "Thanks for Your mail!"
  #   else
  #     puts error
  #   end
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
