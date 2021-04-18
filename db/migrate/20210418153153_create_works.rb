class CreateWorks < ActiveRecord::Migration[6.1]
  def change
    create_table :works do |t|
      t.string :img
      t.string :name
      t.string :url
      t.string :desc

      t.timestamps
    end
  end
end
