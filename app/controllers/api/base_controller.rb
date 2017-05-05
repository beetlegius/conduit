module Api
  class BaseController < ActionController::API
    include CanCan::ControllerAdditions

    before_action :authenticate_request
    attr_reader :current_user

    def pagination_dict(collection)
      {
        current_page: collection.current_page,
        next_page: collection.next_page,
        prev_page: collection.prev_page,
        total_pages: collection.total_pages,
        total_count: collection.total_count,
        page_size: collection.limit_value
      }
    end

    private

      def authenticate_request
        @current_user = AuthorizeApiRequest.call(request.headers).result
        render json: { error: 'Not Authorized' }, status: 401 unless @current_user
      end

  end
end
