// src/components/Main/Content.jsx
import React from "react";
import PostList from "./PostList/PostList";
const Content = ({ posts }) => (
  <section style={styles.content}>
    <PostList posts={posts} />
  </section>
);

const styles = {
  content: {
    flex: 1,
    padding: "20px",
    border: "1px solid #ddd",
  },
};

export default Content;
