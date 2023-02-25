import React, { useState } from "react";

import toast from "react-hot-toast";

import Body from "./Body";
import Reply from "./Reactions/Reply";
import Upvote from "./Reactions/Upvote";
import UserAvatar from "./UserAvatar";

import commentsApi from "../../../apis/comments";
import { checkIsCurrentUser } from "../../../utils/checkIsCurrentUser";
import Editor from "../Editor";
import New from "../New";

const Content = ({
  content,
  users,
  comments,
  user_id,
  parent_id,
  fetchComments,
  id,
  currentUser,
  upvote_ids,
  replies,
  userName,
  mentionedUser,
  isNestedReply,
}) => {
  const [isNewComment, setIsNewComment] = useState(false);
  const [isEditComment, setIsEditComment] = useState(false);
  const isCurrentUser = checkIsCurrentUser(user_id, currentUser);
  const filteredUser = users?.filter(user => user?.id === user_id);
  const avatarProp = filteredUser?.[0]?.avatarProp;

  const handleUpdate = async (e, payload) => {
    e.preventDefault();
    try {
      const { data } = await commentsApi.update({ id, payload });
      toast.success(data?.notice);
      fetchComments();
      setIsEditComment(false);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  return (
    <div className="mt-5 flex flex-col space-y-2">
      {!isEditComment && (
        <div className="flex space-x-2 ">
          <UserAvatar avatarProp={avatarProp} />
          <div className="flex w-full flex-col space-y-1">
            <Body
              content={content}
              fetchComments={fetchComments}
              id={id}
              isCurrentUser={isCurrentUser}
              isNestedReply={isNestedReply}
              mentionedUser={mentionedUser}
              setIsEditComment={setIsEditComment}
              userName={userName}
            />
            <div className="flex items-center space-x-6">
              <Upvote
                currentUser={currentUser}
                fetchComments={fetchComments}
                id={id}
                upvote_ids={upvote_ids}
              />
              <Reply setIsNewComment={setIsNewComment} />
            </div>
          </div>
        </div>
      )}
      {isEditComment && (
        <Editor
          content={content}
          handleUpdate={handleUpdate}
          setIsEditComment={setIsEditComment}
        />
      )}
      {isNewComment && (
        <div className="ml-32 flex w-11/12 content-end">
          <New
            fetchComments={fetchComments}
            id={id}
            parent_id={parent_id}
            setIsNewComment={setIsNewComment}
            userName={userName}
          />
        </div>
      )}
      {replies?.length > 0 && (
        <div className="ml-5 flex flex-col">
          {replies.map(
            ({
              content,
              avatarProp,
              user_id,
              parent_id,
              id,
              upvote_ids,
              replies,
              userName,
              is_nested_reply,
              user_mentioned,
            }) => (
              <Content
                avatarProp={avatarProp}
                comments={comments}
                content={content}
                currentUser={currentUser}
                fetchComments={fetchComments}
                id={id}
                isNestedReply={is_nested_reply}
                key={id}
                mentionedUser={user_mentioned}
                parent_id={parent_id}
                replies={replies}
                upvote_ids={upvote_ids}
                userName={userName}
                user_id={user_id}
                users={users}
              />
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Content;
