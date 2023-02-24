import React, { useState } from 'react';
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";
import classNames from 'classnames';
import commentsApi from '../../../../apis/comments';

const Upvote = ({ upvote_ids, currentUser, id, fetchComments }) => {
    const isCurrentUserVoted = upvote_ids?.includes(currentUser?.id);
    const [count, setCount] = useState(upvote_ids?.length);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const comment = {
                upvote_ids: isCurrentUserVoted? upvote_ids.filter(id => id !== currentUser?.id ): [...upvote_ids, currentUser?.id],
            }
        setCount(comment?.upvote_ids?.length)
        try {
            await commentsApi.update({ id, payload: { comment }});
            fetchComments();
        }
        catch(error) {
            console.log(error);
        }
    }



    return (
        <div className="flex items-center space-x-1 cursor-pointer">
        <UpVoteIcon size="40px" className={classNames("text-gray-500", {
                    "bg-gray-50 text-gray-800": isCurrentUserVoted
                })} onClick={(e) => handleUpdate(e)}/>
        <p className="text-gray-600">{count}</p>
    </div>)
}

export default Upvote;
