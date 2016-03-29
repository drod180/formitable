Rails.application.routes.draw do
  resources :users, only: [:new, :create, :update]
  resource :session, only: [:new, :create, :destroy]

end
