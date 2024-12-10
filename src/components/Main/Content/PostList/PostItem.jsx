// src/components/Main/Content/PostList/PostItem.jsx
import React from "react";

const PostItem = ({ post }) => (
  <article style={styles.article}>
    <h3>{post.title}</h3>
    <p>{post.description}</p>
  </article>
);

const styles = {
  article: {
    border: "1px solid #ddd",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#f9f9f9",
  },
};

export default PostItem;
