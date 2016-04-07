class CreateChoices < ActiveRecord::Migration
  def change
    create_table :choices do |t|
      t.string :label, null: false
      t.boolean :selected, null: false, default: false
      t.integer :field_id, null: false

      t.timestamps null: false
    end

    add_index :choices, :field_id
  end
end
