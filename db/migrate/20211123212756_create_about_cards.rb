class CreateAboutCards < ActiveRecord::Migration[6.1]
  def change
    create_table :about_cards do |t|
      t.string :image
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
