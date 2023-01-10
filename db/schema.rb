# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_12_06_051329) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "characters", force: :cascade do |t|
    t.string "charName"
    t.string "game"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "combo_moves", force: :cascade do |t|
    t.bigint "combo_id"
    t.bigint "move_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["combo_id"], name: "index_combo_moves_on_combo_id"
    t.index ["move_id"], name: "index_combo_moves_on_move_id"
  end

  create_table "combos", force: :cascade do |t|
    t.integer "hits"
    t.string "description"
    t.bigint "character_id"
    t.bigint "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_combos_on_character_id"
    t.index ["user_id"], name: "index_combos_on_user_id"
  end

  create_table "moves", force: :cascade do |t|
    t.string "moveName"
    t.string "input"
    t.bigint "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_moves_on_character_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "bio"
    t.bigint "character_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["character_id"], name: "index_users_on_character_id"
  end

end
