class CommentSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :body, :user_id, :user_name

  def user_name
    object.user.name
  end

end
