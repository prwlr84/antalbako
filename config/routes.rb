Rails.application.routes.draw do
  devise_for :users
  root to: 'pages#home'
  resources :pages do
    get 'ranks'
    get 'mail'
  end
  get '*path', to: 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
