class Api::UsersController < ApplicationController

  def show
    if logged_in?
      render json: current_user
    else
      render json: { message: "Not logged in" }, status: 401
    end
  end

  def create
    @user = User.new(user_params)
    if @user.save && params[:user][:email].include?('@')

      render json: @user
    else

      flash[:errors] = @user.errors.full_messages
      unless params[:user][:email].include?('@')
        flash[:errors].push("Email must contain '@'")
      end

      render json: {
        error: flash[:errors]
        }, status: 401
    end
  end

  def update
    # @user = User.new(user_params)
    # User.update!(@user)
    redirect_to new_user_url
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end
end
