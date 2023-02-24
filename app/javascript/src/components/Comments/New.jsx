import React, { useState } from 'react';
import commentsApi from '../../apis/comments';

const New = ({ setIsNewComment, fetchComments, id, userName, parent_id }) => {
    const isNestedReply = parent_id ? true: false;
    const [ newComment, setNewComment ] = useState(isNestedReply? `@${userName} `: "");
    const handleCancel = (e) => {
        e.preventDefault();
        setIsNewComment(false);
        setNewComment("");
    }

    const handlePost = async (e) => {
        e.preventDefault();
        const parent = isNestedReply? parent_id : id
        try{
            const payload = {
                content: newComment.replace(`@${userName} `, ""),
                parent_id: parent?? null,
                is_nested_reply: isNestedReply,
                user_mentioned: userName ?? null,
            }
            await commentsApi.create(payload);
            fetchComments();
            handleCancel(e);
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col w-full mt-3 space-y-2">
            <textarea rows={5} className="border rounded w-full p-2 font-light" value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder={isNestedReply? "" : "Enter the comment"}/>
            <div className="flex space-x-2">
                <button onClick={(e) => handlePost(e)} className="p-1 px-2 hover:bg-green-200 hover:text-green-900 border rounded">Post</button>
                <button onClick={(e) => handleCancel(e)} className="p-1 px-2 hover:bg-red-200 hover:text-red-900 border rounded">Cancel</button>
            </div>
        </div>
    )
}

export default New;
