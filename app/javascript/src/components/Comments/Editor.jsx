import React, { useState } from "react";

const Editor = ({ setIsEditComment, content, handleUpdate }) => {
  const [editedComment, setEditedComment] = useState(content);
  const handleCancel = e => {
    e.preventDefault();
    setIsEditComment(false);
  };

  return (
    <div className="mt-3 flex w-full flex-col items-end space-y-2">
      <textarea
        className="border w-full rounded-xl p-2 font-light"
        placeholder="Enter the comment"
        rows={3}
        value={editedComment}
        onChange={e => setEditedComment(e.target.value)}
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
          onClick={e => handleUpdate(e, { content: editedComment })}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default Editor;
