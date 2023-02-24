import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import commentsApi from '../apis/comments';
import usersApi from '../apis/users';
import { generateRandomAvatarProp } from '../utils/generateRandomAvatarProp';
import Comments from './Comments';
import New from './Comments/New';
import Navbar from './Navbar';
import Post from './Post';
import toast from 'react-hot-toast';

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
        return {...user, avatarProp: avatarProp}})
      setUsers(filteredData);
      setCurrentUser(filteredData[0]);
    }
    catch(error) {
      console.log(error);
      toast.error(error);

    }
  }

  const fetchComments = async() => {
    try {
    setIsLoading(true);
    const { data } = await commentsApi.list();
    setComments(data?.comments)
    }catch(error){
        console.log(error);
        toast.error(error);
    }
    finally {
      setIsLoading(false);
    }
}

useEffect(() => {
  fetchUsers();
  fetchComments();
}, []);

    return (
        <>
          <Navbar currentUser={currentUser}/>
          <Post isNewComment={isNewComment} setIsNewComment={setIsNewComment} />
          {isNewComment &&
          <div className="w-3/5 mx-auto mt-5">
          <New setIsNewComment={setIsNewComment} fetchComments={fetchComments}/>
          </div>
          }
          {!isLoading && <Comments
            comments={comments}
            fetchComments={fetchComments}
            users={users}
            setComments={setComments}
            currentUser={currentUser}
          />}
          <Toaster position="bottom-center"/>
        </>
    )
}

export default Dashboard;
