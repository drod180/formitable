class Api::UsersController < ApplicationController

  def show
    if logged_in?
      @user = current_user
      render 'show'
    else
      render json: { message: "Not logged in" }, status: 401
    end
  end

  def create

    @user = User.new(user_params)
    if @user.save && is_a_valid_email?(params[:user][:email])
      login!(@user)
      render 'show'
    else
      error = @user.errors.full_messages
      unless is_a_valid_email?(params[:user][:email])
        error.push("Invalid Email Address")
      end
      render json: {
        error: error
        }, status: 401
    end
  end

  def update
    render 'show'
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :username)
  end

  def is_a_valid_email?(email)
    (email =~ /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i)
  end
end
