class PagesController < ApplicationController
  skip_before_action :authenticate_user!, only: [ :home ]

  def home
    gon.ip = request.remote_ip
    gon.ranks = Rank.all.order("score DESC")
    gon.work = Work.all
  end
end
