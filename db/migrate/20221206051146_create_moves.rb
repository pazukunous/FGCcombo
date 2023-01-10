class CreateMoves < ActiveRecord::Migration[7.0]
  def change
    create_table :moves do |t|
      t.string :moveName
      t.string :input
      t.belongs_to :character

      t.timestamps
    end
  end
end
