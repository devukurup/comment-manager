import React from 'react';
import { getSortedComments } from '../../utils/getSortedComments';
import Content from './Content';

const List = ({comments, fetchComments, currentUser, users }) => {
    return (
        <>
        {getSortedComments(comments).map(({content, avatarProp, user_id, parent_id, id, userName, upvote_ids, replies, is_nested_reply, user_mentioned}) =>
        <Content
            id={id}
            userName={userName}
            key={id}
            content={content}
            comments={comments}
            avatarProp={avatarProp}
            parent_id={parent_id}
            user_id={user_id}
            fetchComments={fetchComments}
            currentUser={currentUser}
            upvote_ids={upvote_ids}
            replies={replies}
            users={users}
            isNestedReply={is_nested_reply}
            mentionedUser={user_mentioned}
        />
            )}
        </>
    )
}

export default List;
