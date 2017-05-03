class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :article, counter_cache: true

  validates :body, presence: true
end
