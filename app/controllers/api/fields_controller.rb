class Api::FieldsController < ApplicationController

	  before_action :ensure_logged_in

	  def index
	    @field = Form.find(params[:fields][:form_id]).fields
	  end


	  def create
	    @field = Field.create(field_params)
	    if @field
	      render json: @field
	    else
	      payload = {
	        error: @field.errors.full_messages,
	        status: 400
	      }
	      render :json => payload, :status => :bad_request
	    end
	  end

	  def show
	    @field = Field.find(params[:id])
	  end

	  def update
	    @field = Field.find(params[:id])
	    if @field
	      @field.update(forms_params)
	      if @field
	        render json: @field
	      else
	        payload = {
	          error: @field.errors.full_messages,
	          status: 400
	        }
	        render :json => payload, :status => :bad_request
	      end
	    else
	      payload = {
	        error: "Field does not exist",
	        status: 400
	      }
	      render :json => payload, :status => :bad_request
	    end
	  end

	  def destroy
	    field = Field.find(params[:id])
	    if field
	      field.destroy
	      render json: field
	    else
	      payload = {
	        error: "Field does not exist",
	        status: 400
	      }
	      render :json => payload, :status => :bad_request
	    end
	  end

	  private

	  def fields_params
	    params.require(:fields).permit(:type, :label, :form_rank_id, :form_id)
	  end
end
