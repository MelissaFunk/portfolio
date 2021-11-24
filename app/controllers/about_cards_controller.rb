class AboutCardsController < ApplicationController
  def index
    render json: AboutCard.all, status: :ok
  end
end
