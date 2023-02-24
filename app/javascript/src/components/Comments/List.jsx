import React from 'react';
import Content from './Content';

const List = ({ parentComments, comments, fetchComments, currentUser }) => {
    return (
        <>
        {parentComments.map(({content, avatarProp, user_id, id, userName}) =>
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
        />
            )}
        </>
    )
}

export default List;
