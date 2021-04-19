class PagesController < ApplicationController
  skip_before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  def home
    gon.ip = request.remote_ip
    gon.ranks = Rank.all.order("score DESC")
    gon.work = Work.all
  end

  def create
    @rank = Rank.new(rank_params)
    @rank.save
  end

  private

  def rank_params
    params.permit(:score, :name, :country)
  end
end
