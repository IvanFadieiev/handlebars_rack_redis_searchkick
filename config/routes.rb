Rails.application.routes.draw do
  get 'index/index'

  resources :followers
  resources :images
  resources :comments
  resources :posts
  resources :users

  get '/search_suggestions', to: 'posts#search_suggestions'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
