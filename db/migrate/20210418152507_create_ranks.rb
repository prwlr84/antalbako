class CreateRanks < ActiveRecord::Migration[6.1]
  def change
    create_table :ranks do |t|
      t.integer :score
      t.string :name
      t.string :country

      t.timestamps
    end
  end
end
