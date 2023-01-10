class ComboMovesController < ApplicationController
    skip_before_action :authorize

    def index
        if params[:combo_id]
            combo_moves = ComboMove.where(combo_id: params[:combo_id])
        else
            combo_moves = ComboMove.all
        end
        render json: combo_moves

    end

    def show
        combo_move = ComboMove.find(params[:id])
        render json: combo_move
    end


    def create
        new_combo_move = ComboMove.create(combo_move_params)
        render json: new_combo_move, status: :created
    end

    private
    def combo_move_params
        params.permit(:combo_id, :move_id)
    end

end
