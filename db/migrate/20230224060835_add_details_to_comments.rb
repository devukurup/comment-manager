class AddDetailsToComments < ActiveRecord::Migration[7.0]
  def change
    add_reference :comments, :parent, index: true
    add_column :comments, :upvote_ids, :integer, array: true, default: []
    add_reference :comments, :user, null: false, foreign_key: true
  end
end
