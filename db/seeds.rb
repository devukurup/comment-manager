# frozen_string_literal: true

user1 = User.create(name: "Sansa Stark")
user2 = User.create(name: "John Snow")
user3 = User.create(name: "Arya Stark")
user4 = User.create(name: "Loras Tyrell")

comment1 = Comment.create(
  content: "It is a popular spot for trekking and hiking.", upvote_ids: [user1.id, user2.id],
  user_id: user3.id)
comment2 = Comment.create(
  content: "I have been there last december. It was amazing.", upvote_ids: [],
  parent_id: comment1.id, user_id: user2.id)
comment3 = Comment.create(content: "Sounds awesome!!", upvote_ids: [], parent_id: comment2.id, user_id: user4.id)
comment4 = Comment.create(
  content: "The best time to visit Dudhsagar is during the monsoon season",
  upvote_ids: [user1.id, user2.id, user3.id], user_id: user1.id)
