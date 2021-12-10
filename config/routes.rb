Rails.application.routes.draw do
  resources :about_cards, only: [:index]
  resources :projects, only: [:index]
  resources :blogs, only: [:index]

  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
