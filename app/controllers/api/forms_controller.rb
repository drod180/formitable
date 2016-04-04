class Api::FormsController < ApplicationController

  before_action :ensure_logged_in, except: [:show]

  def index
    @forms = Form.formsForUser(current_user.id)
  end

  # If successfully created go to index page,
  # otherwise re-render create form
  def create
    @form = current_user.forms.create(forms_params)
    if @form
			@form.save_fields(params[:fields])
      render :show
    else
      payload = {
        error: @form.errors.full_messages,
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def show
    @form = Form.find(params[:id])
  end

  # If successfully created go to index page,
  # otherwise re-render update form
  def update
    @form = Form.find(params[:id])
    if @form
      if @form.update(forms_params)
				@form.save_fields(params[:fields])
        render :show
      else
        payload = {
          error: @form.errors.full_messages,
          status: 400
        }
        render :json => payload, :status => :bad_request
      end
    else
      payload = {
        error: "Form does not exist",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def destroy
    form = Form.find(params[:id])
    if form
			form.delete_fields
      form.destroy
      render json: form
    else
      payload = {
        error: "Form does not exist",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  private

  def forms_params
    form_params = params.require(:forms).permit(:name, :description, :public)
    form_params[:user_id] = current_user.id
    form_params
  end

end
