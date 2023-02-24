import React from "react";

import toast from "react-hot-toast";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";
import EditIcon from "remixicon-react/EditLineIcon";

import commentsApi from "../../../apis/comments";

const Body = ({
  userName,
  content,
  setIsEditComment,
  mentionedUser,
  id,
  fetchComments,
  isCurrentUser,
  isNestedReply,
}) => {
  const handleDelete = async e => {
    e.preventDefault();
    try {
      const { data } = await commentsApi.destroy(id);
      toast.success(data?.notice);
      fetchComments();
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="border flex w-full flex-col space-y-2 p-2">
      <div className="flex justify-between">
        <p className="font-medium">{userName}</p>
        <div className="flex space-x-2">
          {isCurrentUser && (
            <EditIcon
              className="cursor-pointer text-gray-400 hover:text-gray-800"
              size="16"
              onClick={() => setIsEditComment(true)}
            />
          )}
          {isCurrentUser && (
            <DeleteIcon
              className="cursor-pointer text-gray-400 hover:text-red-500"
              size="16"
              onClick={e => handleDelete(e)}
            />
          )}
        </div>
      </div>
      <p className="font-light">
        {isNestedReply && (
          <span className="text-blue-600">@{mentionedUser} </span>
        )}
        {content}
      </p>
    </div>
  );
};

export default Body;
