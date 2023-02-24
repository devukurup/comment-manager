import React, { useEffect } from 'react'
import List from './List';

const Comments = ({parentComments, comments, fetchComments, currentUser, users, setComments}) => {
    const setFilteredComments = () => {
        const filterComments = comments.map(comment => {
            const { user_id } = comment;
            const avatarProp = users.find(user => user.id === user_id).avatarProp;
            return({...comment, avatarProp})
        });
        setComments(filterComments);
    };

    useEffect(() => {
        setFilteredComments();
    });
    
    return (
        <div className="mt-8 flex w-3/5 mx-auto flex-col space-y-2">
            <List
                parentComments={parentComments}
                comments={comments}
                fetchComments={fetchComments}
                currentUser={currentUser}
                users={users}
            />
        </div>
    )
}

export default Comments;
