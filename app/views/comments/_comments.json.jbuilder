json.extract! comment, :id, :content, :created_at, :upvote_ids, :parent_id, :user_id
json.userName comment.user.name
json.upvote_ids comment.upvote_ids&.include?('-') ? nil : JSON.parse(comment&.upvote_ids)