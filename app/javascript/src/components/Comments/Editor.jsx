import React, { useState } from 'react'

const Editor = ({ setIsEditComment, content, handleUpdate }) => {
    const [ editedComment, setEditedComment ] = useState(content);
    const handleCancel = (e) => {
        e.preventDefault();
        setIsEditComment(false);
    }


    return (
        <div className="flex flex-col w-full mt-3 space-y-2">
            <textarea rows={5} className="border rounded w-full p-2 font-light" placeholder="Enter the comment"
            value={editedComment} onChange={(e) => setEditedComment(e.target.value)}/>
            <div className="flex space-x-2">
                <button onClick={(e) => handleUpdate(e, { content: editedComment })} className="p-1 px-2 hover:bg-green-200 hover:text-green-900 border rounded">Update</button>
                <button onClick={(e) => handleCancel(e)} className="p-1 px-2 hover:bg-red-200 hover:text-red-900 border rounded">Cancel</button>
            </div>
        </div>
    )
}

export default Editor;
