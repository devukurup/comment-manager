import React from 'react';
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";


const Upvote = () => {
    return (
        <div className="flex items-center space-x-1">
        <UpVoteIcon size="40px" color="#989898"/>
        <p>5</p>
    </div>)
}

export default Upvote;
