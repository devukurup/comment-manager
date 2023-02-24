import React, { useState } from 'react';
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";
import classNames from 'classnames';
import commentsApi from '../../../../apis/comments';
import { filterUpvotes } from '../../../../utils/filterUpvotes';
import { modifyUpvoteIds } from '../../../../utils/modifyUpvoteIds';

const Upvote = ({ upvote_ids, currentUser, id, fetchComments }) => {
    const ids = filterUpvotes(upvote_ids);
    const count = ids? ids.length: 0;
    const isVoted = (ids?.includes(currentUser.id));
    const [isActive, setIsActive] = useState(isVoted);

    const handleUpdate = async (e, activeStatus) => {
        e.preventDefault();
        setIsActive(activeStatus);
        const newUpvoteIds = modifyUpvoteIds(activeStatus, ids, currentUser?.id)
        const payload = {
            upvote_ids: JSON.stringify(newUpvoteIds),
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
