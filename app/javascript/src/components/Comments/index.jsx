import React, { useEffect, useState } from 'react'
import List from './List';

const Comments = ({comments, fetchComments, currentUser, users, setComments}) => {
    const [parentComments, setParentComments] = useState([]);
    const setFilteredComments = () => {
        const filterComments = comments?.map(comment => {
            const avatarProp = users.find(user => user.id === comment.user_id)?.avatarProp;
            return({...comment, avatarProp})
        });
        setComments(filterComments);
        setParentComments(filterComments?.filter(comment => comment.parent_id === null))
    };

    useEffect(() => {
        setFilteredComments();
    }, []);

    return (
        <div className="mt-8 flex w-3/5 mx-auto flex-col space-y-2">
            <List
                parentComments={parentComments}
                comments={comments}
                fetchComments={fetchComments}
                currentUser={currentUser}
            />
        </div>
    )
}

export default Comments;
