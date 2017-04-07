Rails.application.routes.draw do
  get 'index/index'

  resources :followers
  resources :images
  resources :comments
  resources :posts
  resources :users

  get '/search_suggestions', to: 'posts#search_suggestions'
  get 'user_posts', to: 'users#user_posts'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
