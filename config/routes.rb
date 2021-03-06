Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :forms, only: [:create, :destroy, :index, :show, :update]
		resources :fields, only: [:create, :destroy, :index, :show, :update]
		resources :choices, only: [:create, :destroy, :index, :show, :update]
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:show, :create, :destroy]
  end


  get '*unmatched_route', to: 'static_pages#root'
end
