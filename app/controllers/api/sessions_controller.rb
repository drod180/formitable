class Api::SessionsController < ApplicationController

before_action :ensure_logged_out, only: [:create]

  # Always return success in order to avoid 401 for checking if logged in
  # when initially going to login page.
  def show
    if logged_in?
      @user = current_user
      render 'show'
    else
      render json: {}, status: 200
    end
  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])
    if @user
      login!(@user)
      render 'show'
    else
      render json: {
        error: ["Invalid credentials"]
        }, status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
