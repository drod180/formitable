class AddNullFalseToFormId < ActiveRecord::Migration
  def change
		change_column :fields, :form_id, :integer, null: false
  end
end
