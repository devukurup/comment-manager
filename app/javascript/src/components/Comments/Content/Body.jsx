import React from 'react'

const Body = ({ userName, content }) => {
    return (
        <div className="flex flex-col space-y-2 border p-2 w-full">
            <p className="font-medium">{userName}</p>
            <p className="font-light">{content}</p>
        </div>
    )
}

export default Body;
