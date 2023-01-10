class CharactersController < ApplicationController
    skip_before_action :authorize
    def index
        if params[:charName]
            chars = Character.where(charName: params[:charName])
        else

            chars = Character.all
        end
        render json: chars
    end

    def show
        char = Character.find(params[:id])
        render json: char
    end

    # def getCharId
    #     char = Character.where(charName: params[:charName])
    #     render json: post
    # end

    private
    def char_params
        params.permit(:charName, :game)
    end
end
