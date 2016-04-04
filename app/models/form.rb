class Form < ActiveRecord::Base
  validates :name, :description, :user_id, presence: true
  validates :public, inclusion: { in: [true, false] }

	has_many :fields
  belongs_to :user

  def self.formsForUser(id)
    self.where("user_id = ?", id)
  end

	def save_fields(fields)
		fields.each do |field|
			label = field[1][:label] || "Untitled"
			field_params = {
				category: field[1][:category],
				label: label,
				form_rank_id: field[1][:form_rank_id]
			}

			if field[1][:id]
				field[1].update(field_params)
			else
				self.fields.create(field_params)
			end
		end
	end

	def delete_fields
		self.fields.each { |field| field.destroy }
	end
end
