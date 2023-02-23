import React from 'react';
import EditIcon from "remixicon-react/EditLineIcon";
import DeleteIcon from "remixicon-react/DeleteBinLineIcon";

const Body = ({ userName, content }) => {
    return (
        <div className="flex flex-col space-y-2 border p-2 w-full">
            <div className="flex justify-between">
            <p className="font-medium">{userName}</p>
            <div className="flex space-x-2">
            <EditIcon size="16" className="text-gray-400 hover:text-gray-800" />
            <DeleteIcon size="16" className="text-gray-400 hover:text-gray-800" />
            </div>


            </div>
            <p className="font-light">{content}</p>
        </div>
    )
}

export default Body;
