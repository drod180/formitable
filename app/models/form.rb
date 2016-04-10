class Form < ActiveRecord::Base
  validates :name, :description, :user_id, presence: true
  validates :public, inclusion: { in: [true, false] }

	has_many :fields, dependent: :destroy
  belongs_to :user
	has_many :choices, through: :fields

  def self.formsForUser(id)
    self.where("user_id = ?", id)
  end

	def save_fields(fields)
		if(fields)
			fields.each do |idx, field|

				label = field[:label] || "Untitled"
	      option = field[:option] || ""
				field_params = {
					category: field[:category],
					label: label,
	        option: option,
					form_rank_id: field[:form_rank_id]
				}
				if field[:id]
					new_field = Field.find(field[:id])
					new_field.update(field_params)
					new_field.save_choices(field[:choices])
				else
					new_field = self.fields.create(field_params)
					new_field.save_choices(field[:choices])
				end
			end
		end

		def delete_fields
			self.fields.each { |field| field.destroy }
		end

		def delete_choices
			self.choices.each { |choice| choice.destroy }
		end
	end

end
