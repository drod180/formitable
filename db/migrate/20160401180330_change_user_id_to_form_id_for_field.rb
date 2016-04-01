class ChangeUserIdToFormIdForField < ActiveRecord::Migration
  def up
		remove_column :fields, :user_id
		add_column :fields, :form_id, :integer
		add_index :fields, :form_id
		add_index :fields, :form_rank_id
  end

	def down
		add_column :fields, :user_id, :integer
		remove_column :fields, :form_id
		remove_index :fields, :form_rank_id
	end
end
