import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  const [comments, setComments] = useState(props.comments);

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map((commentData, index) => {
        return <Comment key={index} comment={commentData} />
      })}
      <CommentInput />
    </div>
  );
};

export default CommentSection;
