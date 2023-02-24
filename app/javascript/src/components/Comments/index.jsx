import React, { useState, useEffect } from 'react'
import commentsApi from '../../apis/comments';
import { generateRandomAvatarProp } from '../../utils/generateRandomAvatarProp';
import List from './List';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [parentComments, setParentComments] = useState([]);

    const fetchComments = async() => {
        try {
        const { data } = await commentsApi.list();
        const filteredData = data?.comments.map(comment => {
            const avatarProp = generateRandomAvatarProp();
            return {...comment, avatarProp: avatarProp}})
        setComments(filteredData)
        setParentComments(filteredData?.filter(comment => comment.parent_id === null))

        }catch(error){
            console.log(error);
        }
    }
    useEffect(() => {
        fetchComments();
    }, []);

    return (
        <div className="mt-8 flex w-3/5 mx-auto flex-col space-y-2">
            <List parentComments={parentComments} comments={comments} fetchComments={fetchComments}/>
        </div>
    )
}

export default Comments;
