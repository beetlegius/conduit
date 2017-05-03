Rails.application.routes.draw do

  namespace :api do
    defaults format: :json do
      resource :user
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
