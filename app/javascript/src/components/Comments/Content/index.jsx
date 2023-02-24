import React, {useState} from 'react';
import { getReplyComments } from '../../../utils/getReplyComments';
import UserAvatar from './UserAvatar';
import Body from './Body';
import Reply from './Reactions/Reply';
import Upvote from './Reactions/Upvote';
import New from '../New';
import Editor from '../Editor';

const Content = ({ content, avatarProp, comments, parent, fetchComments}) => {
    const replies = getReplyComments(comments, parent);
    const [isNewComment, setIsNewComment] = useState(false);
    const [ isEditComment, setIsEditComment] = useState(false);

    return (
        <div className="flex flex-col space-y-2 mt-5">
            {!isEditComment && <div className="flex space-x-2 ">
        <UserAvatar avatarProp={avatarProp}/>
            <div className="flex flex-col space-y-1 w-full">
            <Body userName="Shrishti Singh" content={content} setIsEditComment={setIsEditComment}/>
        <div className="flex space-x-6 items-center">
            <Upvote />
            <Reply setIsNewComment={setIsNewComment} />
        </div>
        </div>
        </div>}
        {isEditComment && <Editor content={content} setIsEditComment={setIsEditComment}/>}
        {isNewComment && <div className="flex w-11/12 content-end">
            <New setIsNewComment={setIsNewComment} fetchComments={fetchComments}/>
        </div>}

        {replies.length > 0 &&
            <div className="flex flex-col ml-5">
            {
            replies.map(({content, avatarProp, user_id}) =>
            <Content content={content} avatarProp={avatarProp} comments={comments} parent={user_id} fetchComments={fetchComments}/>
                )}
                </div>
                }

        </div>
    )
}

export default Content;
