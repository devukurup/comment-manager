import React from "react";

import Content from "./Content";

import { getSortedComments } from "../../utils/getSortedComments";

const List = ({ comments, fetchComments, currentUser, users }) => (
  <>
    {getSortedComments(comments).map(
      ({
        content,
        avatarProp,
        user_id,
        parent_id,
        id,
        userName,
        upvote_ids,
        replies,
        is_nested_reply,
        user_mentioned,
      }) => (
        <Content
          avatarProp={avatarProp}
          comments={comments}
          content={content}
          currentUser={currentUser}
          fetchComments={fetchComments}
          id={id}
          isNestedReply={is_nested_reply}
          key={id}
          mentionedUser={user_mentioned}
          parent_id={parent_id}
          replies={replies}
          upvote_ids={upvote_ids}
          userName={userName}
          user_id={user_id}
          users={users}
        />
      )
    )}
  </>
);

export default List;
