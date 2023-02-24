import React, { useState, useEffect } from "react";

import toast, { Toaster } from "react-hot-toast";

import Comments from "./Comments";
import New from "./Comments/New";
import Navbar from "./Navbar";
import Post from "./Post";

import commentsApi from "../apis/comments";
import usersApi from "../apis/users";
import { generateRandomAvatarProp } from "../utils/generateRandomAvatarProp";

const Dashboard = () => {
  const [isNewComment, setIsNewComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      const { data } = await usersApi.list();
      const filteredData = data?.users.map(user => {
        const avatarProp = generateRandomAvatarProp();

        return { ...user, avatarProp };
      });
      setUsers(filteredData);
      setCurrentUser(filteredData[0]);
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
  };

  const fetchComments = async () => {
    try {
      setIsLoading(true);
      const { data } = await commentsApi.list();
      setComments(data?.comments);
    } catch (error) {
      console.log(error);
      toast.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
    fetchComments();
  }, []);

  return (
    <>
      <Navbar currentUser={currentUser} />
      <Post isNewComment={isNewComment} setIsNewComment={setIsNewComment} />
      {isNewComment && (
        <div className="mx-auto mt-5 w-3/5">
          <New
            fetchComments={fetchComments}
            setIsNewComment={setIsNewComment}
          />
        </div>
      )}
      {!isLoading && (
        <Comments
          comments={comments}
          currentUser={currentUser}
          fetchComments={fetchComments}
          setComments={setComments}
          users={users}
        />
      )}
      <Toaster position="bottom-center" />
    </>
  );
};

export default Dashboard;
