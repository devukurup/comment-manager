Rails.application.routes.draw do
  defaults format: :json do
    resources :comments, only: %i[index create update destroy]
  end

  root "home#index"
  get '*path', to: 'home#index', via: :all
end
