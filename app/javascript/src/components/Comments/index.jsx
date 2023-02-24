import React, { useEffect, useState } from 'react'
import List from './List';

const Comments = ({ comments, fetchComments, currentUser, users }) => {
    return (
        <div className="mt-8 flex w-3/5 mx-auto flex-col space-y-2">
            <List
                comments={comments}
                fetchComments={fetchComments}
                currentUser={currentUser}
                users={users}
            />
        </div>
    )
}

export default Comments;
