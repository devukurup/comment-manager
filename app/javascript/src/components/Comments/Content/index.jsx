import React, {useState} from 'react';
import UserAvatar from './UserAvatar';
import Body from './Body';
import Reply from './Reactions/Reply';
import Upvote from './Reactions/Upvote';
import New from '../New';
import Editor from '../Editor';
import commentsApi from '../../../apis/comments';
import { checkIsCurrentUser } from "../../../utils/checkIsCurrentUser";

const Content = ({ content, users, comments, user_id, parent_id, fetchComments, id, currentUser, upvote_ids, replies, userName, mentionedUser, isNestedReply}) => {
    const [isNewComment, setIsNewComment] = useState(false);
    const [ isEditComment, setIsEditComment] = useState(false);
    const isCurrentUser = checkIsCurrentUser(user_id, currentUser);
    const filteredUser = users?.filter(user => user?.id === user_id);
    const avatarProp= filteredUser?.[0]?.avatarProp;

    const handleUpdate = async (e, payload) => {
        e.preventDefault();
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
            <Body isNestedReply={isNestedReply} mentionedUser={mentionedUser} userName={userName} content={content} setIsEditComment={setIsEditComment} id={id} fetchComments={fetchComments} isCurrentUser={isCurrentUser}/>
        <div className="flex space-x-6 items-center">
            <Upvote  upvote_ids={upvote_ids} currentUser={currentUser} id={id} fetchComments={fetchComments}/>
            <Reply setIsNewComment={setIsNewComment} />
        </div>
        </div>
        </div>}
        {isEditComment && <Editor content={content} setIsEditComment={setIsEditComment} handleUpdate={handleUpdate}/>}
        {isNewComment && <div className="flex w-11/12 content-end">
            <New setIsNewComment={setIsNewComment} userName={userName} parent_id={parent_id} fetchComments={fetchComments} id={id}/>
        </div>}

        {replies?.length > 0 &&
            <div className="flex flex-col ml-5">
            {
            replies.map(({content, avatarProp, user_id, parent_id, id, upvote_ids, replies, userName, is_nested_reply, user_mentioned }) =>
            <Content id={id} userName={userName} users={users} content={content} upvote_ids={upvote_ids} avatarProp={avatarProp} comments={comments}
            user_id={user_id} parent_id={parent_id} fetchComments={fetchComments} currentUser={currentUser} replies={replies}
            mentionedUser={user_mentioned}
            isNestedReply={is_nested_reply}/>
                )}
                </div>
                }

        </div>
    )
}

export default Content;
