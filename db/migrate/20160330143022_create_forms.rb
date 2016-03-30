class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.integer :user_id, null: false
      t.boolean :public, null: false, default: true

      t.timestamps null: false
    end

    add_index :forms, :user_id 
  end
end
