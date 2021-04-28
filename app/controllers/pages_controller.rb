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

  def create
    @rank = Rank.new(rank_params)
    @rank.save
  end

  def mail
    @mail = Mail.new(mail_params)
    @mail.deliver

    if @mail.deliver
      # re-initialize Home object for cleared form
      redirect_to root_path, notice: "Thanks for Your mail!"
    else
      redirect_to "/connect", alert: "Something went wrong! Try again!"
    end
  end

  private

  def rank_params
    params.permit(:score, :name, :country)
  end

  def mail_params
    params.permit(:subject, :name, :email, :message)
  end
end
