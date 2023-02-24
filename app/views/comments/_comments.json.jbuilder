json.extract! comment, :id, :is_nested_reply, :content, :upvote_ids, :created_at, :parent_id, :user_id, :user_mentioned
json.userName comment.user.name