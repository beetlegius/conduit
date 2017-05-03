module Api
  class UsersController < BaseController
    skip_before_action :authenticate_request, only: %w(create)
    authorize_resource except: :create

    def show
      @user = current_user
      render_user
    end

    def create
      @user = User.create! user_params
      command = AuthenticateUser.call(@user.email, @user.password)

      if command.success?
        render json: { auth_token: command.result, user: @user }, status: :created
      else
        render json: { error: command.errors }, status: :unauthorized
      end
    end

    def update
      @user = current_user
      @user.update! user_params
      render_user
    end

    private

    def user_params
      params.require(:user).permit(:name, :email, :image_url, :bio, :password, :password_confirmation)
    end

    def render_user(status = :ok)
      render json: @user, status: status, location: [:api, @user]
    end

  end
end
