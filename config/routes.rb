Rails.application.routes.draw do
  resources :projects, only: [:index, :show]
  resources :blogs, only: [:index, :show]
end
