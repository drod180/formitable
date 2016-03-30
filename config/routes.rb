Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :forms, only: [:create, :destroy, :index, :show, :update]
  end
  resources :users, only: [:new, :create, :update]
  resource :session, only: [:new, :create, :destroy]

end
