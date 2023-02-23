import React from 'react';
import { getReplyComments } from '../../../utils/getReplyComments';
import UserAvatar from './UserAvatar';
import Body from './Body';
import Reply from './Reactions/Reply';
import Upvote from './Reactions/Upvote';

const Content = ({ content, avatarProp, comments, parent}) => {
    const replies = getReplyComments(comments, parent);

    return (
        <div className="flex flex-col space-y-2 mt-5">
            <div className="flex space-x-2 ">
        <UserAvatar avatarProp={avatarProp}/>
            <div className="flex flex-col space-y-1">
            <Body userName="Shrishti Singh" content={content}/>
        <div className="flex space-x-6 items-center">
            <Upvote />
            <Reply />
        </div>
        </div>
        </div>

        {replies.length > 0 &&
            <div className="flex flex-col ml-5">
            {
            replies.map(({content, avatarProp, userId}) =>
            <Content content={content} avatarProp={avatarProp} comments={comments} parent={userId}/>
                )}
                </div>
                }

        </div>
    )
}

export default Content;
