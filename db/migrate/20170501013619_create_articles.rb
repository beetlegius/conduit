class CreateArticles < ActiveRecord::Migration[5.1]
  def change
    create_table :articles do |t|
      t.string :title
      t.text :content

      t.integer :favorites_count, :comments_count, default: 0, null: false
      t.belongs_to :user, foreign_key: true, index: true
      t.timestamps
    end
  end
end
