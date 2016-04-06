class Form < ActiveRecord::Base
  validates :name, :description, :user_id, presence: true
  validates :public, inclusion: { in: [true, false] }

	has_many :fields
  belongs_to :user

  def self.formsForUser(id)
    self.where("user_id = ?", id)
  end

	def save_fields(fields)
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
				Field.find(field[:id]).update(field_params)
			else
				self.fields.create(field_params)
			end
		end
	end

	def delete_fields
		self.fields.each { |field| field.destroy }
	end
end
