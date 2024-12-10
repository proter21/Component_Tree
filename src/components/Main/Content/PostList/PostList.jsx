// src/components/Main/Content/PostList.jsx
import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts }) => (
  <div>
    {posts.map((post) => (
      <PostItem key={post.id} post={post} />
    ))}
  </div>
);

export default PostList;
