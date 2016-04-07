class AddFieldRank < ActiveRecord::Migration
  def change
		add_column :choices, :field_rank_id, :integer
		change_column_null :choices, :field_rank_id, false
  end
end
