import React from 'react';
import EditIcon from "remixicon-react/EditLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";
import commentsApi from '../../../apis/comments';

const Body = ({ userName, content, setIsEditComment, mentionedUser, id, fetchComments, isCurrentUser, isNestedReply }) => {
    const handleDelete = async (e) => {
        e.preventDefault();
        try{
            await commentsApi.destroy(id);
            fetchComments();
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className="flex flex-col space-y-2 border p-2 w-full">
            <div className="flex justify-between">
            <p className="font-medium">{userName}</p>
            <div className="flex space-x-2">
            {isCurrentUser && <EditIcon size="16" className="text-gray-400 hover:text-gray-800 cursor-pointer" onClick={() => setIsEditComment(true)}/>}
            {isCurrentUser && <DeleteIcon size="16" className="text-gray-400 hover:text-red-500 cursor-pointer" onClick={(e) => handleDelete(e)} />}
            </div>


            </div>
            <p className="font-light">
                {isNestedReply && <span className="text-blue-600">@{mentionedUser} </span>}
                {content}</p>
        </div>
    )
}

export default Body;
