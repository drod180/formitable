class AddOptionsToFields < ActiveRecord::Migration
  def change
    add_column :fields, :option, :string
  end
end
