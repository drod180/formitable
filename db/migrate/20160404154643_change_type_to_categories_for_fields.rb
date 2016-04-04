class ChangeTypeToCategoriesForFields < ActiveRecord::Migration
  def change
		rename_column :fields, :type, :category 
  end
end
