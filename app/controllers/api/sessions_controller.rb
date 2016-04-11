class Api::SessionsController < ApplicationController

before_action :ensure_logged_out, only: [:create]

  def show
    if logged_in?
      @user = current_user
      render 'show'
    else
      render json: { message: "Not logged in" }, status: 401
    end
  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])

    if @user
      login!(@user)
      render 'show'
    else
      render json: {
        error: @user.errors.full_messages
        }, status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
