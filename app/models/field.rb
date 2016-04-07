class Field < ActiveRecord::Base
	validates :category, :label, :form_rank_id, :form_id, presence: true

	belongs_to :form
	has_many :choices

	def self.get_fields_by_form_order(form)
			form.fields.order("form_rank_id")
	end

	def save_choices(choices)
		choices.each do |idx, choice|

			label = choice[:label] || "Unlabeled"
			selected = choice[:selected] || false
			choiceParams = {
				label: label,
        selected: selected
			}
			if choice[:id]
				Choice.find(choice[:id]).update(choiceParams)
			else
				self.choices.create(choiceParams)
			end
		end
	end

	def delete_choices
		self.choices.each { |choice| choice.destroy }
	end
end
