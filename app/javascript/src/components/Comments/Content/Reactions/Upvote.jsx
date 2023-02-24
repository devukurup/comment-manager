import React, { useState } from 'react';
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";
import classNames from 'classnames';
import commentsApi from '../../../../apis/comments';


const Upvote = ({ upvote_ids, currentUser, id, fetchComments }) => {
    const ids = typeof  upvote_ids === "object" ? upvote_ids : [upvote_ids];
    const count = (ids)? ids.length: 0;
    const [isActive, setIsActive] = useState(ids ? ids.includes(currentUser.id): false);

    const handleUpdate = async (e, activeStatus) => {
        e.preventDefault();
        setIsActive(activeStatus);
        const newUpvoteIds = activeStatus? ids?.push(currentUser.id) : ids?.filter(id => id!== currentUser.id);
        const payload = {
            upvote_ids: JSON.stringify([...newUpvoteIds])
        }
        try {
            await commentsApi.update({ id, payload});
            fetchComments();
        }
        catch(error) {
            console.log(error);
        }
    }



    return (
        <div className="flex items-center space-x-1 cursor-pointer">
        <UpVoteIcon size="40px" className={classNames("text-gray-500", {
                    "bg-gray-50 text-gray-800": isActive
                })} onClick={(e) => handleUpdate(e, !isActive)}/>
        <p className="text-gray-600">{count}</p>
    </div>)
}

export default Upvote;
