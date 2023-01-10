class MovesController < ApplicationController
    skip_before_action :authorize
    def index
        if params[:character_id]
            moves = Move.where(character_id: params[:character_id])
        else

            moves = Move.all
        end
        render json: moves
    end

    def show
        move = Move.find(params[:id])
        render json: move
    end

    def create
        move = Move.create!(move_params)
        render json: move, status: :created

    end
    private
    def move_params
        params.permit(:moveName, :input, :character_id)
    end




end
