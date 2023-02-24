import React from 'react';
import { getSortedComments } from '../../utils/getSortedComments';
import Content from './Content';

const List = ({comments, fetchComments, currentUser, users }) => {
    return (
        <>
        {getSortedComments(comments).map(({content, avatarProp, user_id, id, userName, upvote_ids, replies}) =>
        <Content
            id={id}
            userName={userName}
            key={user_id}
            content={content}
            comments={comments}
            avatarProp={avatarProp}
            parent={user_id}
            fetchComments={fetchComments}
            currentUser={currentUser}
            upvote_ids={upvote_ids}
            replies={replies}
            users={users}
        />
            )}
        </>
    )
}

export default List;
