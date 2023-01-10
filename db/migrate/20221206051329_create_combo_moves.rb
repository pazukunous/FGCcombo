class CreateComboMoves < ActiveRecord::Migration[7.0]
  def change
    create_table :combo_moves do |t|

      t.belongs_to :combo
      t.belongs_to :move

      t.timestamps
    end
  end
end
