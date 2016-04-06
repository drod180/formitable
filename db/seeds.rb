# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all

#Make 1 user so when know the ID of the first user
email = "admin@aa.io"
username = "admin"
password = "password"
admin_user = User.create!({ email: email, password: password, username: username })

Form.destroy_all

name = "Movies"
description = "Planes, Trains, other things"
user_id = admin_user.id
form_1 = Form.create!({ name: name, description: description, user_id: user_id})

name = "Gondola"
description = "I am never at home on Sundays."
form_2 = Form.create!({ name: name, description: description, user_id: user_id})

name = "Missile"
description = "Abstraction is often one floor above you."
form_3 = Form.create!({ name: name, description: description, user_id: user_id})

name = "Sardine"
description = "Lets all be unique together until we realise we are all the same."
form_4 = Form.create!({ name: name, description: description, user_id: user_id})

name = "Saw"
description = "We have never been to Asia, nor have we visited Africa."
form_5 = Form.create!({ name: name, description: description, user_id: user_id})


Field.destroy_all

category = "text"
label = "Barber"
form_rank_id = 1;
form_id = form_1.id
Field.create!({ category: category,
	label: label,
  option: "Medium",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "number"
label = "Biplane"
form_rank_id = 2;
form_id = form_1.id
Field.create!({ category: category,
	label: label,
  option: "Small",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "checkbox"
label = "Experience"
form_rank_id = 3;
form_id = form_1.id
Field.create!({ category: category,
	label: label,
  option: "Two",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "radio"
label = "Freighter"
form_rank_id = 4;
form_id = form_1.id
Field.create!({ category: category,
	label: label,
  option: "One",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "date"
label = "Hexagon"
form_rank_id = 5;
form_id = form_1.id
Field.create!({ category: category,
	label: label,
  option: "",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

category = "text"
label = "Cap"
form_rank_id = 1;
form_id = form_2.id
Field.create!({ category: category,
	label: label,
  option: "Large",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "number"
label = "Chick"
form_rank_id = 2;
form_id = form_2.id
Field.create!({ category: category,
	label: label,
  option: "Medium",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "checkbox"
label = "Dipstick"
form_rank_id = 3;
form_id = form_2.id
Field.create!({ category: category,
	label: label,
  option: "One",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "radio"
label = "Romanian"
form_rank_id = 4;
form_id = form_2.id
Field.create!({ category: category,
	label: label,
  option: "Side",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "date"
label = "Tank"
form_rank_id = 5;
form_id = form_2.id
Field.create!({ category: category,
	label: label,
  option: "",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

category = "text"
label = "Check"
form_rank_id = 1;
form_id = form_3.id
Field.create!({ category: category,
	label: label,
  option: "Medium",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "number"
label = "Glider"
form_rank_id = 2;
form_id = form_3.id
Field.create!({ category: category,
	label: label,
  option: "Medium",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "checkbox"
label = "Laundry"
form_rank_id = 3;
form_id = form_3.id
Field.create!({ category: category,
	label: label,
  option: "One",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "radio"
label = "Scent"
form_rank_id = 4;
form_id = form_3.id
Field.create!({ category: category,
	label: label,
  option: "Three",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "date"
label = "Silk"
form_rank_id = 5;
form_id = form_3.id
Field.create!({ category: category,
	label: label,
  option: "",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

category = "text"
label = "Agenda"
form_rank_id = 1;
form_id = form_4.id
Field.create!({ category: category,
	label: label,
  option: "Large",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "Telephone"
label = "Digger"
form_rank_id = 2;
form_id = form_4.id
Field.create!({ category: category,
	label: label,
  option: "",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "checkbox"
label = "Discussion"
form_rank_id = 3;
form_id = form_4.id
Field.create!({ category: category,
	label: label,
  option: "One",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "radio"
label = "Pumpkin"
form_rank_id = 4;
form_id = form_4.id
Field.create!({ category: category,
	label: label,
  option: "One",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "date"
label = "Wine"
form_rank_id = 5;
form_id = form_4.id
Field.create!({ category: category,
	label: label,
  option: "",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

category = "text"
label = "Wine"
form_rank_id = 1;
form_id = form_5.id
Field.create!({ category: category,
	label: label,
  option: "Small",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "number"
label = "Mustard"
form_rank_id = 2;
form_id = form_5.id
Field.create!({ category: category,
	label: label,
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "textarea"
label = "Nose"
form_rank_id = 3;
form_id = form_5.id
Field.create!({ category: category,
	label: label,
  option: "Medium",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "radio"
label = "Tortoise"
form_rank_id = 4;
form_id = form_5.id
Field.create!({ category: category,
	label: label,
  option: "One",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

category = "Email"
label = "Puppy"
form_rank_id = 5;
form_id = form_5.id
Field.create!({ category: category,
	label: label,
  option: "Medium",
	form_rank_id: form_rank_id,
	form_id: form_id
	})

#~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
#Make 50 new users
# i = 0
# while i < 20
#   email = Faker::Internet.email
#   username = Faker::Internet.user_name
#   password = Faker::Internet.password
#   User.create!({ email: email, password: password, username: username })
#   i += 1
# end
#
# #Make 1 more user so when know the ID of the last user
# email = Faker::Internet.email
# username = Faker::Internet.user_name
# password = Faker::Internet.password
# last_user = User.create!({ email: email, password: password, username: username })
# i = 0
# while i < 100
#   name = Faker::Hacker.noun
#   description = Faker::Hacker.say_something_smart
#   user_id = rand(first_user.id..last_user.id)
#   Form.create!({ name: name, description: description, user_id: user_id})
#   i += 1
# end
