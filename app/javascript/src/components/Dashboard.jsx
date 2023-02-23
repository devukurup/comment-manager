import React, { useState, useEffect } from 'react'
import commentsApi from '../apis/comments'
import Navbar from './Navbar';
import Post from './Post';

const Dashboard = () => {
  // const [comments, setComments] = useState([]);
  //   const fetchComments = async () => {
  //       try{
  //           const {
  //               data: {comments},
  //           } = await commentsApi.list();
  //           console.log(comments)
  //           setComments(comments);
  //       } catch(error) {
  //         console.log(error);
  //       }
  //   }
  //   useEffect(() => {
  //     fetchComments();
  //   }, [])
    return (
        <>
          <Navbar/>
          <Post />

        </>
    )
}

export default Dashboard;
