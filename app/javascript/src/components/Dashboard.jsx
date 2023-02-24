import React, { useState, useEffect } from 'react';
import commentsApi from '../apis/comments';
import usersApi from '../apis/users';
import { generateRandomAvatarProp } from '../utils/generateRandomAvatarProp';
import Comments from './Comments';
import New from './Comments/New';
import Navbar from './Navbar';
import Post from './Post';

const Dashboard = () => {
  const [isNewComment, setIsNewComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [parentComments, setParentComments] = useState([]);
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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
    }
  }

  const fetchComments = async() => {
    try {
    const { data } = await commentsApi.list();
    setComments(data?.comments)
    setParentComments(data?.comments?.filter(comment => comment.parent_id === null))

    }catch(error){
        console.log(error);
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
          <Comments
            parentComments={parentComments}
            comments={comments}
            fetchComments={fetchComments}
            users={users}
            setComments={setComments}
            currentUser={currentUser}
          />

        </>
    )
}

export default Dashboard;
