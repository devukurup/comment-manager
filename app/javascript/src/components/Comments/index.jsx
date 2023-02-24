import React from "react";

import List from "./List";

const Comments = ({ comments, fetchComments, currentUser, users }) => (
  <div className="mx-auto mt-8 flex w-3/5 flex-col space-y-2">
    <List
      comments={comments}
      currentUser={currentUser}
      fetchComments={fetchComments}
      users={users}
    />
  </div>
);

export default Comments;
