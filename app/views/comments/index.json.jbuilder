# frozen_string_literal: true

json.comments @comments do |comment|
    json.extract! comment, :id, :content, :upvote_ids, :parent_id, :user_id
    json.userName comment.user.name
    json.replies comment.replies
    json.upvote_ids comment.upvote_ids&.include?("-") ? nil : JSON.parse(comment&.upvote_ids)
end
