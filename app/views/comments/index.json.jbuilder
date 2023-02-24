# frozen_string_literal: true

json.comments @comments do |comment|
    json.extract! comment, :id, :content, :upvote_ids, :parent_id, :user_id
    json.userName comment.user.name
end
