class Choice < ActiveRecord::Base
	validates :selected, inclusion: { in: [true, false] }
	validates :label,
						:field_id, 
						:field_rank_id,
						:field_form_rank_id,
						presence: true

	belongs_to :field

	def self.get_choices_by_field_order(field)
			field.choices.order("field_rank_id")
	end
end
