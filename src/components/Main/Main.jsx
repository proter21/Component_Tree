// src/components/Main.jsx
import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content/Content";
const Main = ({ posts }) => (
  <main style={styles.main}>
    <Sidebar />
    <Content posts={posts} />
  </main>
);

const styles = {
  main: {
    display: "flex",
    padding: "20px",
  },
};

export default Main;
