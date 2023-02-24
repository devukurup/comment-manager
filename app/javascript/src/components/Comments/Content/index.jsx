import React, {useState} from 'react';
import { getReplyComments } from '../../../utils/getReplyComments';
import UserAvatar from './UserAvatar';
import Body from './Body';
import Reply from './Reactions/Reply';
import Upvote from './Reactions/Upvote';
import New from '../New';
import Editor from '../Editor';
import commentsApi from '../../../apis/comments';
import { checkIsCurrentUser } from "../../../utils/checkIsCurrentUser";

const Content = ({ content, avatarProp, comments, parent, fetchComments, id, currentUser, userName}) => {
    const replies = getReplyComments(comments, parent);
    const [isNewComment, setIsNewComment] = useState(false);
    const [ isEditComment, setIsEditComment] = useState(false);
    const isCurrentUser = checkIsCurrentUser(parent, currentUser);

    const handleUpdate = async (payload) => {
        try {
            await commentsApi.update({ id, payload});
            fetchComments();
            setIsEditComment(false);
        }
        catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="flex flex-col space-y-2 mt-5">
            {!isEditComment && <div className="flex space-x-2 ">
        <UserAvatar avatarProp={avatarProp}/>
            <div className="flex flex-col space-y-1 w-full">
            <Body userName={userName} content={content} setIsEditComment={setIsEditComment} id={id} fetchComments={fetchComments} isCurrentUser={isCurrentUser}/>
        <div className="flex space-x-6 items-center">
            <Upvote />
            <Reply setIsNewComment={setIsNewComment} />
        </div>
        </div>
        </div>}
        {isEditComment && <Editor content={content} setIsEditComment={setIsEditComment} handleUpdate={handleUpdate}/>}
        {isNewComment && <div className="flex w-11/12 content-end">
            <New setIsNewComment={setIsNewComment} fetchComments={fetchComments}/>
        </div>}

        {replies.length > 0 &&
            <div className="flex flex-col ml-5">
            {
            replies.map(({content, avatarProp, user_id, id, userName}) =>
            <Content id={id} content={content} avatarProp={avatarProp} comments={comments} parent={user_id} userName={userName} fetchComments={fetchComments} currentUser={currentUser}/>
                )}
                </div>
                }

        </div>
    )
}

export default Content;
