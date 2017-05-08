module Api
  class ArticlesController < BaseController
    skip_before_action :authenticate_request, only: %w(index show)
    load_resource :user, only: %w(index)
    load_and_authorize_resource through: :user, shallow: true

    def index
      if params[:page].present?
        page_number = params[:page][:number].to_i if params[:page][:number]
        page_size   = params[:page][:size].to_i if params[:page][:size]
      else
        page_number = 1
        page_size   = nil
      end

      @articles = @articles.includes(:user, :favorite_users, :tags, comments: :user).page(page_number).per(page_size)
      render json: @articles, meta: pagination_dict(@articles), meta_key: :pagination, status: :ok
    end

    def feed
      @articles = @articles.where(user: current_user.following)
      index
    end

    def show
      render_article
    end

    def create
      @article = current_user.articles.create! article_params
      render_article :created
    end

    def update
      @article.update! article_params
      render_article
    end

    def destroy
      @article.destroy
      render_article
    end

    private

    def article_params
      params.require(:article).permit(:title, :content)
    end

    def render_article(status = :ok)
      render json: @article, status: status, location: [:api, @article]
    end

  end
end
