class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :article, counter_cache: true

  validates :article_id, uniqueness: { scope: :user_id }
end
