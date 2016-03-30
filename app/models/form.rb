class Form < ActiveRecord::Base
  validates :name, :description, :user_id, presence: true
  validates :public, inclusion: { in: [true, false] }

  def self.formsForUser(id)
    self.where("id = ?", id)
  end
end
