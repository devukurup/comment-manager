import React from 'react';
import ReplyIcon from "remixicon-react/Chat1LineIcon";

const Reply = ({ setIsNewComment }) => {
    return (
        <div className="flex w-full items-center space-x-1 cursor-pointer" onClick={() => setIsNewComment(true)}>
                <ReplyIcon size="25px" className="text-blue-500"/>
                <p className="text-gray-600">Reply</p>
            </div>
    )
}

export default Reply;
