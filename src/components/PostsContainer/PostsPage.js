import React, {useState} from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  const [posts, setPosts] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {
        posts.map((postData, index) => {
          return <Post key={index} post={postData} />
        })
      }

    </div>
  );
};

export default PostsPage;
