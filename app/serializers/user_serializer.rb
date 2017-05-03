class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :image_url, :bio
  has_many :favorite_articles
  has_many :following
  has_many :followers
end
