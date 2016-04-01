class Field < ActiveRecord::Base
	validates :type, :label, :form_rank_id, :form_id, presence: true

	belongs_to :form

end
