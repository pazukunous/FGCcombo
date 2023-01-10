class CreateCombos < ActiveRecord::Migration[7.0]
  def change
    create_table :combos do |t|
      t.integer :hits
      t.string :description
      t.belongs_to :character
      t.belongs_to :user

      t.timestamps
    end
  end
end
