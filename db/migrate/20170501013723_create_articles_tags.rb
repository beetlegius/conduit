class CreateArticlesTags < ActiveRecord::Migration[5.1]
  def change
    create_join_table :articles, :tags
    add_index :articles_tags, [:article_id, :tag_id], unique: true
  end
end
