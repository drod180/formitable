# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

#Make 1 user so when know the ID of the first user
email = Faker::Internet.email
username = Faker::Internet.user_name
password = Faker::Internet.password
first_user = User.create!({ email: email, password: password, username: username })

#Make 50 new users
i = 0
while i < 20
  email = Faker::Internet.email
  username = Faker::Internet.user_name
  password = Faker::Internet.password
  User.create!({ email: email, password: password, username: username })
  i += 1
end

#Make 1 more user so when know the ID of the last user
email = Faker::Internet.email
username = Faker::Internet.user_name
password = Faker::Internet.password
last_user = User.create!({ email: email, password: password, username: username })

Form.destroy_all

i = 0
while i < 100
  name = Faker::Hacker.noun
  description = Faker::Hacker.say_something_smart
  user_id = rand(first_user.id..last_user.id)
  Form.create!({ name: name, description: description, user_id: user_id})
  i += 1
end
