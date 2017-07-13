class Api::PokemonController < ApplicationController
  def show
    @poke = Pokemon.find_by(id: params[:id])
    render :show
  end

  def index
    @pokemon = Pokemon.all
    render :index
  end
end
