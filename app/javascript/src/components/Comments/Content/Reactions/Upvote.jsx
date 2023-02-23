import React from 'react';
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";


const Upvote = () => {
    return (
        <div className="flex items-center space-x-1">
        <UpVoteIcon size="40px" className="text-gray-500"/>
        <p className="text-gray-600">5</p>
    </div>)
}

export default Upvote;
