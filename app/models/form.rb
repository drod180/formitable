class Form < ActiveRecord::Base
  validates :name, :description, :user_id, presence: true
  validates :public, inclusion: { in: [true, false] }

  belongs_to :user
  
  def self.formsForUser(id)
    self.where("user_id = ?", id)
  end
end
