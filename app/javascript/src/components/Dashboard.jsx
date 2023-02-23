import React from 'react';
import Comments from './Comments';
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
          <Comments />

        </>
    )
}

export default Dashboard;
