import React from 'react';
import ReplyIcon from "remixicon-react/Chat1LineIcon";

const Reply = () => {
    return (
        <div className="flex items-center space-x-1">
                <ReplyIcon size="25px" className="text-blue-500"/>
                <p className="text-gray-600">Reply</p>
            </div>
    )
}

export default Reply;
