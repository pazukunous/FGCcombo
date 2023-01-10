class CombosController < ApplicationController
    skip_before_action :authorize
    def index
        if params[:char_name]
            character = Character.find_by(charName: params[:char_name])
            combos = Combo.where(character_id: character.id)
        else
            combos = Combo.all
        end
        render json: combos
    end

    def show
        combo = Combo.find(params[:id])
        render json: combo
    end

    def combosPerChar
    end

    def create
        
        new_combo = Combo.create(combo_params)
        render json: new_combo, status: :created
    end


    private
    def combo_params
        params.permit(:hits, :description, :character_id, :user_id)
    end

end
