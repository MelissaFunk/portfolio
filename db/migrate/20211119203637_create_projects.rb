class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :title
      t.string :link
      t.string :youtube
      t.string :github
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
