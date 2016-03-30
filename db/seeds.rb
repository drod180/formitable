# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
i = 0
while i < 50
  email = Faker::Internet.email
  username = Faker::Internet.user_name
  password = Faker::Internet.password
  User.create!({ email: email, password: password, username: username })
  i += 1
end

Form.destroy_all

i = 0
while i < 50
  name = Faker::Hacker.noun
  description = Faker::Hacker.say_something_smart
  user_id = rand(50)
  Form.create!({ name: name, description: description, user_id: user_id})
  i += 1
end

logout!
user_id = rand(50)
user = User.find(user_id)
login!(user)
