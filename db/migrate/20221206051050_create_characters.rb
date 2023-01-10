class CreateCharacters < ActiveRecord::Migration[7.0]
  def change
    create_table :characters do |t|
      t.string :charName
      t.string :game

      t.timestamps
    end
  end
end
