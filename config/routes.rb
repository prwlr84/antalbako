Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  post 'mail', to: 'pages#mail'
  resources :pages do
    get 'ranks'

  end
  get '*path', to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
