class Article < ApplicationRecord

  extend FriendlyId
  friendly_id :title

  belongs_to :user
  has_many :comments
  has_many :favorites
  has_many :favorite_users, through: :favorites, source: :user
  has_and_belongs_to_many :tags

  validates :title, presence: true

end
