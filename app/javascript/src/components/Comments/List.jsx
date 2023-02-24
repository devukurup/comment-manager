import React from 'react';
import Content from './Content';

const List = ({ parentComments, comments, fetchComments, currentUser, users }) => {
    return (
        <>
        {parentComments.map(({content, avatarProp, user_id, id}) =>
        <Content
            id={id}
            key={user_id}
            content={content}
            comments={comments}
            parent={user_id}
            fetchComments={fetchComments}
        />
            )}
        </>
    )
}

export default List;
