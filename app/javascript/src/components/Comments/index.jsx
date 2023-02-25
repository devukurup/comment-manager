import React from "react";

import List from "./List";

const Comments = ({ comments, fetchComments, currentUser, users }) => (
  <div className="mx-4 mt-8 flex flex-col space-y-2 md:mx-auto md:w-3/5">
    <List
      comments={comments}
      currentUser={currentUser}
      fetchComments={fetchComments}
      users={users}
    />
  </div>
);

export default Comments;
