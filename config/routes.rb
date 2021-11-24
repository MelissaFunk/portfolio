Rails.application.routes.draw do
  resources :about_cards, only: [:index]
  resources :projects, only: [:index, :show]
  resources :blogs, only: [:index, :show]
end
