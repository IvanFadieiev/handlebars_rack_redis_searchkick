module ApplicationHelper

  def token
    app_controller = ActionController::Base::ApplicationController.new
    app_controller.request = ActionDispatch::Request.new({})
    @token = app_controller.send(:form_authenticity_token)
  end
end
