class UsersController < ApplicationController
  def new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save && params[:user][:email].include?('@')
      redirect_to root_url
    else
      flash[:errors] = @user.errors.full_messages
      unless params[:user][:email].include?('@')
        flash[:errors].push("Email must contain '@'")
      end
      redirect_to new_user_url
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
