class Api::SessionsController < ApplicationController

  def show
    if logged_in?
      render json: current_user
    else
      render json: { message: "Not logged in" }, status: 401
    end
  end

  def create
    @user = User.find_by_credentials(params[:email], params[:password])

    if @user
      login!(@user)
      render json: @user
    else
      flash[:errors] = @user.errors.full_messages
      render json: {
        error: flash[:errors]
        }, status: 401
    end
  end

  def destroy
    logout!
    render json: {}
  end
end
