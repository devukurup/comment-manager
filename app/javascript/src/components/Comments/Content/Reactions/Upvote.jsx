import React, { useState } from "react";

import classNames from "classnames";
import toast from "react-hot-toast";
import UpVoteIcon from "remixicon-react/ArrowUpSFillIcon";

import commentsApi from "../../../../apis/comments";

const Upvote = ({ upvote_ids, currentUser, id, fetchComments }) => {
  const isCurrentUserVoted = upvote_ids?.includes(currentUser?.id);
  const [count, setCount] = useState(upvote_ids?.length);

  const handleUpdate = async e => {
    e.preventDefault();
    const comment = {
      upvote_ids: isCurrentUserVoted
        ? upvote_ids.filter(id => id !== currentUser?.id)
        : [...upvote_ids, currentUser?.id],
    };
    setCount(comment?.upvote_ids?.length);
    try {
      await commentsApi.update({ id, payload: { comment } });
      fetchComments();
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="flex cursor-pointer items-center space-x-1">
      <UpVoteIcon
        size="40px"
        className={classNames("text-gray-500", {
          "bg-gray-50 text-gray-800": isCurrentUserVoted,
        })}
        onClick={e => handleUpdate(e)}
      />
      <p className="text-gray-600">{count}</p>
    </div>
  );
};

export default Upvote;
