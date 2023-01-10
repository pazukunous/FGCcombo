class Move < ApplicationRecord
    belongs_to :character
    has_many :combo_moves
    has_many :combos, through: :combo_moves
end
