class AddDatetoBlogs < ActiveRecord::Migration[6.1]
  def change
    add_column :blogs, :date, :string
  end
end
