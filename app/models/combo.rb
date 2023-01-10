class Combo < ApplicationRecord
    belongs_to :character
    has_many :combo_moves
    has_many :moves, through: :combo_moves
end
