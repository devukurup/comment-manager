import React, { useState } from 'react';
import BlogImage from "../../../assets/images/nature.jpeg";
import CommentIcon from 'remixicon-react/QuestionAnswerLineIcon'
import LikeIcon from 'remixicon-react/Heart3LineIcon';
import LikeFillIcon from  'remixicon-react/Heart3FillIcon';

const Post = () => {
    const [isPostLiked, setPostLiked] = useState(false);
    return (
        <div className="flex flex-col mx-auto w-3/5 border-2 b-1 p-5 m-2 mt-10 space-y-5">
            <h1 className="font-semibold text-lg">Earth's treasures</h1>
            <h4>Dudhsagar is a stunning waterfall located on the Mandovi River in Goa, India. The name "Dudhsagar" means "Sea of Milk" in Hindi, which refers to the appearance of the waterfall's white, frothy water as it cascades down from a height of over 300 meters.</h4>
            <img src={BlogImage} alt="Nature's image" />
            <div className="flex space-x-3">
                <div className="py-1 px-2 bg-gray-50 shadow cursor-pointer hover:bg-gray-200">
                    {isPostLiked ?
                    <LikeIcon onClick={() => setPostLiked(!isPostLiked)}/>
                    :
                    <LikeFillIcon className="text-red-600" onClick={() => setPostLiked(!isPostLiked)}/>}
                </div>
                <div className="py-1 px-2 bg-gray-50 shadow cursor-pointer hover:bg-gray-200">
                 <CommentIcon />
                </div>
            </div>

        </div>
    )
}

export default Post;
