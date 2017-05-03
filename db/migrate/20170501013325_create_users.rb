class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name, :email, :image_url
      t.text :bio

      t.string :password_digest
      t.string :slug
      t.timestamps
    end

    add_index :users, :email, unique: true
    add_index :users, :slug, unique: true
  end
end
