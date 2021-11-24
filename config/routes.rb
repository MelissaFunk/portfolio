Rails.application.routes.draw do
  resources :about_cards, only: [:index]
  resources :projects, only: [:index]
  resources :blogs, only: [:index]
end
