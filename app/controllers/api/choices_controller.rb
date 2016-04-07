class Api::ChoicesController < ApplicationController

  def index
		field = Field.find(params[:choices][:field_id]) if params[:choices]
		@choices = field ? Choice.get_choices_by_field_order(field) : []
		render json: @choices
  end

  def create
    @choice = Choice.create(field_params)
    if @choice
      render json: @choice
    else
      payload = {
        error: @choice.errors.full_messages,
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def update
    @choice = Choice.find(params[:id])
    if @choice
      if @choice.update(choice_params)
        render json: @choice
      else
        payload = {
          error: @choice.errors.full_messages,
          status: 400
        }
        render :json => payload, :status => :bad_request
      end
    else
      payload = {
        error: "Choice does not exist",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  def destroy
    choice = Choice.find(params[:id])
    if choice
      choice.destroy
      render json: choice
    else
      payload = {
        error: "Choice does not exist",
        status: 400
      }
      render :json => payload, :status => :bad_request
    end
  end

  private

  def choice_params
    params.require(:choices).permit(:label,
																		:selected,
																		:field_rank_id,
																		:field_form_rank_id)
  end

end
