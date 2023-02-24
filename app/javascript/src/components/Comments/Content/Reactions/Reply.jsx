import React from "react";

import ReplyIcon from "remixicon-react/Chat1LineIcon";

const Reply = ({ setIsNewComment }) => (
  <div
    className="flex w-full cursor-pointer items-center space-x-1"
    onClick={() => setIsNewComment(true)}
  >
    <ReplyIcon className="text-blue-500" size="25px" />
    <p className="text-gray-600">Reply</p>
  </div>
);

export default Reply;
