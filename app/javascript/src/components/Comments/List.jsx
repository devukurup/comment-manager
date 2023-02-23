import React from 'react';
import { SAMPLE_COMMENTS } from '../constants';
import Content from './Content';

const List = ({ parentComments }) => {
    return (
        <>
        {parentComments.map(({content, avatarProp, userId}) =>
        <Content key={userId} content={content} avatarProp={avatarProp} comments={SAMPLE_COMMENTS} parent={userId}/>
            )}
        </>
    )
}

export default List;
