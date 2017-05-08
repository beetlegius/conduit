Rails.application.routes.draw do

  namespace :api do
    defaults format: :json do
      resources :users do
        get :current, on: :collection
        resources :articles, only: %w(index)
      end
      resources :articles do
        get :feed, on: :collection
      end
      resources :tags
      post 'authenticate', to: 'authentication#authenticate'
    end
  end

  get '*path', to: 'dashboard#index'
  root to: 'dashboard#index'
end
