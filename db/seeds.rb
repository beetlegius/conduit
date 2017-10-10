# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

words = Lipsum.words[100].to_s.split(" ")
paragraph = Lipsum.paragraphs[1].to_s


# Create users

password = '123456'

gustavo  = User.create! name: 'Gustavo',  email: 'info@beetlegius.com.ar',      password: password, bio: paragraph, image_url: 'http://coamosprings.com/wp-content/uploads/2016/12/profile-design-adam-vflfw4iDZ.png'
josefina = User.create! name: 'Josefina', email: 'lapera5@hotmail.com',         password: password, bio: paragraph, image_url: 'https://cfl.dropboxstatic.com/static/images/jobs/jobs_2015/profile-home-makers-vflWnMtf7.jpg'
eduardo  = User.create! name: 'Eduardo',  email: 'kairus@hotmail.com',          password: password, bio: paragraph, image_url: 'https://careers.guidewire.com/files/2914/5883/3737/profile_2016_dave_mount.jpg'
mariana  = User.create! name: 'Mariana',  email: 'marisanchez@gmail.com',       password: password, bio: paragraph, image_url: 'https://cfl.dropboxstatic.com/static/images/jobs/jobs_2015/genevieve-vflQIXjKJ.png'
sandra   = User.create! name: 'Sandra',   email: 'sandra@sandro.com.ar',      password: password, bio: paragraph, image_url: 'https://nursing.vanderbilt.edu/images/directory/branam_leah-500.jpg'
emanuel  = User.create! name: 'Emanuel',  email: 'emanuel@sandro.com.br', password: password, bio: paragraph, image_url: 'https://nursing.vanderbilt.edu/images/directory/smith_randall-500.jpg'


# Create relationships

gustavo.follow josefina
gustavo.follow sandra

josefina.follow gustavo
josefina.follow eduardo

eduardo.follow mariana
eduardo.follow gustavo
eduardo.follow emanuel

mariana.follow sandra
mariana.follow gustavo
mariana.follow josefina

sandra.follow emanuel

emanuel.follow gustavo
emanuel.follow josefina
emanuel.follow eduardo
emanuel.follow mariana
emanuel.follow sandra


# Create tags


20.times do
  Tag.create! name: words.sample(3).join(" ").humanize
end


# Create articles

users = User.all
tags = Tag.all

1000.times do
  article = users.sample.articles.create! title: words.sample(6).join(" ").humanize, content: paragraph
  puts article.title
  article.tags << tags.sample(rand(tags.size / 2))
end

articles = Article.all

users.each do |user|
  user.following.includes(:articles).each do |followed|
    followed.articles.sample(80).each do |article|
      article.comments.create! body: paragraph, user: user
    end
  end
  user.favorite_articles << articles.sample(rand(articles.size / 20))
end
