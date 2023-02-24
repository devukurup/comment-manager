json.extract! comment, :id, :is_nested_reply, :content, :created_at, :upvote_ids, :parent_id, :user_id, :user_mentioned
json.userName comment.user.name
json.upvote_ids comment.upvote_ids&.include?('-') ? nil : JSON.parse(comment&.upvote_ids)