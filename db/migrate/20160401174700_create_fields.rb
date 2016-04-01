class CreateFields < ActiveRecord::Migration
  def change
    create_table :fields do |t|
			t.string :type, null: false
			t.string :label, null: false
			t.integer :form_rank_id, null: false
			t.integer :user_id, null: false
			
      t.timestamps null: false
    end

		add_index :fields, :user_id
  end
end
