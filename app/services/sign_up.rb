require "rack/request"

class SignUp
  include Virtus.model

  extend ActiveModel::Naming
  include ActiveModel::Conversion
  include ActiveModel::Validations
  include Rack::Request::Helpers

  attribute :title, String
  attribute :name, String

  validates :name, presence: true

  def initialize(params, os)
    @os = os
    params = set_user params
    @name = params[:name]
  end

  def persisted?
    false
  end

  def save
    if valid?
      persist!
      true
    else
      'net paramsov'
    end
  end

  private

  def persist!
    @user = User.create(name: @name)
    system "notify-send 'User #{@name} created'" if @os
  end

  def set_user params
    params.require(:user).permit(:name)
  end
end