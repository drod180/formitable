class AddFieldFormRankId < ActiveRecord::Migration
  def change
		add_column :choices, :field_form_rank_id, :integer
		change_column_null :choices, :field_form_rank_id, false
  end
end
