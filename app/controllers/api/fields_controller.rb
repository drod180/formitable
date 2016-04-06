class Api::FieldsController < ApplicationController

	  before_action :ensure_logged_in

	  def index
			form = Form.find(params[:fields][:form_id]) if params[:fields]
			@fields = form ? Field.get_fields_by_form_order(form) : []
			render json: @fields
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
	      @field.update(field_params)
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

	  def field_params
	    params.require(:fields).permit(:category, :label, :form_rank_id, :form_id, :option)
	  end
end
