class CreateFavorites < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|

      t.belongs_to :user, foreign_key: true, index: true
      t.belongs_to :article, foreign_key: true, index: true
      t.timestamps
    end
  end
end
