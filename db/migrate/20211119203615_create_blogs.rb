class CreateBlogs < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :title
      t.string :link
      t.string :image
      t.integer :minutes

      t.timestamps
    end
  end
end
