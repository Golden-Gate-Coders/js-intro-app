Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "pages#home"
  get "/daylight", to: "pages#daylight"
  get "/calculator", to: "pages#calculator"
  get "/colors", to: 'pages#colors'
end
