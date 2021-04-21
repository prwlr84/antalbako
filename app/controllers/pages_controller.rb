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
    puts Rank.last.name
  end

  private

  def rank_params
    params.permit(:score, :name, :country)
  end
end
