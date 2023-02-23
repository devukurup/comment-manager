import React from 'react'
import { SAMPLE_COMMENTS } from '../constants';
import List from './List';

const Comments = () => {
    const parentComments = SAMPLE_COMMENTS.filter(comment => comment.parent === null)
    return (
        <div className="mt-8 flex w-3/5 mx-auto flex-col space-y-2">
            <List parentComments={parentComments}/>
        </div>
    )
}

export default Comments;
