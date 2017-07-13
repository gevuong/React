Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :pokemon, only: [:show, :index, :update, :destroy, :create]
  end

end
