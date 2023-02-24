import React, { useState } from 'react';
import commentsApi from '../../apis/comments';

const New = ({ setIsNewComment, fetchComments, id }) => {
    const [ newComment, setNewComment ] = useState("");
    const handleCancel = () => {
        setIsNewComment(false);
        setNewComment("");
    }

    const handlePost = async () => {
        try{
            const payload = {
                content: newComment,
                parent_id: id? id : null,
            }
            await commentsApi.create(payload);
            fetchComments();
            handleCancel();
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col w-full mt-3 space-y-2">
            <textarea rows={5} className="border rounded w-full p-2 font-light" value={newComment} onChange={(e) => setNewComment(e.target.value)} placeholder="Enter the comment"/>
            <div className="flex space-x-2">
                <button onClick={() => handlePost()} className="p-1 px-2 hover:bg-green-200 hover:text-green-900 border rounded">Post</button>
                <button onClick={() => handleCancel()} className="p-1 px-2 hover:bg-red-200 hover:text-red-900 border rounded">Cancel</button>
            </div>
        </div>
    )
}

export default New;
