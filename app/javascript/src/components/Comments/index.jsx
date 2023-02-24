import React from 'react'
import List from './List';

const Comments = ({parentComments, comments, fetchComments}) => {
    return (
        <div className="mt-8 flex w-3/5 mx-auto flex-col space-y-2">
            <List parentComments={parentComments} comments={comments} fetchComments={fetchComments}/>
        </div>
    )
}

export default Comments;
