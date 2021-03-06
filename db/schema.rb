# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160407155517) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "choices", force: :cascade do |t|
    t.string   "label",                              null: false
    t.boolean  "selected",           default: false, null: false
    t.integer  "field_id",                           null: false
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.integer  "field_rank_id",                      null: false
    t.integer  "field_form_rank_id",                 null: false
  end

  add_index "choices", ["field_id"], name: "index_choices_on_field_id", using: :btree

  create_table "fields", force: :cascade do |t|
    t.string   "category",     null: false
    t.string   "label",        null: false
    t.integer  "form_rank_id", null: false
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "form_id",      null: false
    t.string   "option"
  end

  add_index "fields", ["form_id"], name: "index_fields_on_form_id", using: :btree
  add_index "fields", ["form_rank_id"], name: "index_fields_on_form_rank_id", using: :btree

  create_table "forms", force: :cascade do |t|
    t.string   "name",                       null: false
    t.text     "description",                null: false
    t.integer  "user_id",                    null: false
    t.boolean  "public",      default: true, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "forms", ["user_id"], name: "index_forms_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true, using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
