# frozen_string_literal: true

json.comments @comments do |comment|
    json.partial! "comments", comment: comment
    json.replies comment.replies do |reply|
        json.partial! "comments", comment: reply
    end
end
