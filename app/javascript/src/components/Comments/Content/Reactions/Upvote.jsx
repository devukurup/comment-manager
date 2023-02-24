import React, { useState } from 'react';
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";
import classNames from 'classnames';
import commentsApi from '../../../../apis/comments';
import { filterUpvotes } from '../../../../utils/filterUpvotes';


const Upvote = ({ upvote_ids, currentUser, id, fetchComments }) => {
    const ids = filterUpvotes(upvote_ids);
    const count = (ids)? ids.length: 0;
    const [isActive, setIsActive] = useState(ids ? ids.includes(currentUser.id): false);

    const handleUpdate = async (e) => {
        e.preventDefault();
        setIsActive(prevState => !prevState);
        let newUpvoteIds = isActive? [...ids, currentUser.id] : ids?.filter(id => id!== currentUser.id);
        newUpvoteIds = typeof newUpvoteIds === "object" ? [...newUpvoteIds] : [ newUpvoteIds ];
        const payload = {
            upvote_ids: newUpvoteIds ? JSON.stringify(newUpvoteIds) : null,
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
                })} onClick={(e) => handleUpdate(e)}/>
        <p className="text-gray-600">{count}</p>
    </div>)
}

export default Upvote;
