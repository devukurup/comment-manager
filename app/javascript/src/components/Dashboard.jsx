import React, { useState } from 'react';
import Comments from './Comments';
import New from './Comments/New';
import Navbar from './Navbar';
import Post from './Post';

const Dashboard = () => {
  const [isNewComment, setIsNewComment] = useState(false);
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
          <Post isNewComment={isNewComment} setIsNewComment={setIsNewComment} />
          {isNewComment &&
          <div className="w-3/5 mx-auto mt-5">
          <New setIsNewComment={setIsNewComment}/>
          </div>
          }
          <Comments/>

        </>
    )
}

export default Dashboard;
