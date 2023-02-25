import React, { useState } from "react";

import classNames from "classnames";
import LikeFillIcon from "remixicon-react/Heart3FillIcon";
import LikeIcon from "remixicon-react/Heart3LineIcon";
import CommentIcon from "remixicon-react/QuestionAnswerLineIcon";

import BlogImage from "../../../assets/images/nature.jpeg";

const Post = ({ isNewComment, setIsNewComment }) => {
  const [isPostLiked, setIsPostLiked] = useState(false);

  return (
    <div className="b-1 m-2 mx-4 mt-10 flex flex-col space-y-5 rounded-xl border-2 p-5 md:mx-auto md:w-3/5">
      <h1 className="text-lg font-semibold">Earth's treasures</h1>
      <h4>
        Dudhsagar is a stunning waterfall located on the Mandovi River in Goa,
        India. The name "Dudhsagar" means "Sea of Milk" in Hindi, which refers
        to the appearance of the waterfall's white, frothy water as it cascades
        down from a height of over 300 meters.
      </h4>
      <img alt="Nature's image" src={BlogImage} />
      <div className="flex space-x-3">
        <div className="bg-gray-50 shadow cursor-pointer py-1 px-2 hover:bg-gray-200">
          {isPostLiked ? (
            <LikeIcon onClick={() => setIsPostLiked(!isPostLiked)} />
          ) : (
            <LikeFillIcon
              className="text-red-600"
              onClick={() => setIsPostLiked(!isPostLiked)}
            />
          )}
        </div>
        <div
          className={classNames(
            "bg-gray-50 shadow cursor-pointer py-1 px-2 hover:bg-gray-200",
            {
              "bg-gray-200": isNewComment,
            }
          )}
        >
          <CommentIcon onClick={() => setIsNewComment(true)} />
        </div>
      </div>
    </div>
  );
};

export default Post;
