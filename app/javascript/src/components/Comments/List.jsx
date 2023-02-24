import React from 'react';
import Content from './Content';

const List = ({ parentComments, comments, fetchComments }) => {
    return (
        <>
        {parentComments.map(({content, avatarProp, userId}) =>
        <Content key={userId} content={content} avatarProp={avatarProp} comments={comments} parent={userId} fetchComments={fetchComments}/>
            )}
        </>
    )
}

export default List;
