class AddIsNestedReplyToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :is_nested_reply, :boolean, default: false
    add_column :comments, :user_mentioned, :string
  end
end
