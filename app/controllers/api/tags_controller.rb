module Api
  class TagsController < BaseController
    load_and_authorize_resource

    def index
      if params[:page].present?
        page_number = params[:page][:number]
        page_size   = params[:page][:size]
      else
        page_number = 1
        page_size   = nil
      end

      @tags = @tags.includes(:articles).page(page_number).per(page_size)
      render json: @tags, status: :ok
    end

    def show
      render_tag
    end

    def create
      @tag = Tag.create! tag_params
      render_tag :created
    end

    def update
      @tag.update! tag_params
      render_tag
    end

    def destroy
      @tag.destroy
      render_tag
    end

    private

    def tag_params
      params.require(:tag).permit(:name)
    end

    def render_tag(status = :ok)
      render json: @tag, status: status, location: [:api, @tag]
    end

  end
end
