Rails.application.routes.draw do

  resources :users, only:[:show, :create, :index, :destroy, :update]
  resources :moves, only:[:show, :create, :index]
  resources :characters, only:[:show, :index, :getCharId]
  resources :combos, only:[:show, :create, :index]
  resources :combo_moves, only:[:show, :create, :index]
  post "/login", to: "sessions#create"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  get "/me", to: "users#show"
end