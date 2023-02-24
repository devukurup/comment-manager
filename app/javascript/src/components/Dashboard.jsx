import React, { useState, useEffect } from 'react';
import commentsApi from '../apis/comments';
import { generateRandomAvatarProp } from '../utils/generateRandomAvatarProp';
import Comments from './Comments';
import New from './Comments/New';
import Navbar from './Navbar';
import Post from './Post';

const Dashboard = () => {
  const [isNewComment, setIsNewComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [parentComments, setParentComments] = useState([]);

  const fetchComments = async() => {
    try {
    const { data } = await commentsApi.list();
    const filteredData = data?.comments.map(comment => {
        const avatarProp = generateRandomAvatarProp();
        return {...comment, avatarProp: avatarProp}})
    setComments(filteredData)
    setParentComments(filteredData?.filter(comment => comment.parent_id === null))

    }catch(error){
        console.log(error);
    }
}

useEffect(() => {
  fetchComments();
}, []);
    return (
        <>
          <Navbar/>
          <Post isNewComment={isNewComment} setIsNewComment={setIsNewComment} />
          {isNewComment &&
          <div className="w-3/5 mx-auto mt-5">
          <New setIsNewComment={setIsNewComment} fetchComments={fetchComments}/>
          </div>
          }
          <Comments parentComments={parentComments} comments={comments} fetchComments={fetchComments}/>

        </>
    )
}

export default Dashboard;
