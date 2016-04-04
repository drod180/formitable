class Field < ActiveRecord::Base
	validates :category, :label, :form_rank_id, :form_id, presence: true

	belongs_to :form

	def self.get_fields_by_form_order(form)
			form.fields.order("form_rank_id")
	end
end
