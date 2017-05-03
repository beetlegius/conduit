class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :created_at, :updated_at, :title, :content, :favorites_count, :comments_count
  belongs_to :user
  has_many :favorite_users
  has_many :comments
  has_many :tags

end
