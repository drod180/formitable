class User < ActiveRecord::Base
  validates :username, :email, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 7 }
  attr_accessor :password

  after_initialize :ensure_session_token!

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def self.generate_session_token
    SecureRandom.base64(16)
  end

  def ensure_session_token!
    self.session_token ||= User.generate_session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password).to_s
  end

  def reset_session_token!
    self.session_token ||= User.generate_session_token
    self.save!
    self.session_token
  end

end
