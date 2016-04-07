class Field < ActiveRecord::Base
	validates :category, :label, :form_rank_id, :form_id, presence: true

	belongs_to :form
	has_many :choices

	def self.get_fields_by_form_order(form)
			form.fields.order("form_rank_id")
	end

	def save_choices(choices)
		choices = choices || []
		choices.each do |idx, choice|

			label = choice[:label] || "Unlabeled"
			selected = choice[:selected] || false
			choice_params = {
				label: label,
        selected: selected,
				field_rank_id: choice[:field_rank_id],
				field_form_rank_id: choice[:field_form_rank_id]
			}
			if choice[:id]
				Choice.find(choice[:id]).update(choice_params)
			else
				self.choices.create(choice_params)
			end
		end
	end

	def delete_choices
		self.choices.each { |choice| choice.destroy }
	end
end
