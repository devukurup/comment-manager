import React, { useState } from "react";

import toast from "react-hot-toast";

import commentsApi from "../../apis/comments";

const New = ({ setIsNewComment, fetchComments, id, userName, parent_id }) => {
  const isNestedReply = !!parent_id;
  const [newComment, setNewComment] = useState(
    isNestedReply ? `@${userName} ` : ""
  );

  const handleCancel = e => {
    e.preventDefault();
    setIsNewComment(false);
    setNewComment("");
  };

  const handlePost = async e => {
    e.preventDefault();
    const parent = isNestedReply ? parent_id : id;
    try {
      const payload = {
        content: newComment.replace(`@${userName} `, ""),
        parent_id: parent ?? null,
        is_nested_reply: isNestedReply,
        user_mentioned: userName ?? null,
      };
      const { data } = await commentsApi.create(payload);
      toast.success(data?.notice);
      fetchComments();
      handleCancel(e);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="mt-3 flex w-full flex-col items-end space-y-2">
      <textarea
        className="border w-full rounded-xl p-2 font-light"
        placeholder={isNestedReply ? "" : "Enter the comment"}
        rows={3}
        value={newComment}
        onChange={e => setNewComment(e.target.value)}
      />
      <div className="flex space-x-2">
        <button
          className="border rounded p-1 px-2 hover:bg-red-200 hover:text-red-900"
          onClick={e => handleCancel(e)}
        >
          Cancel
        </button>
        <button
          className="border rounded p-1 px-2 hover:bg-green-200 hover:text-green-900"
          onClick={e => handlePost(e)}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default New;
