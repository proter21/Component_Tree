// src/components/Main/Sidebar.jsx
import React from "react";

const Sidebar = () => (
  <aside style={styles.sidebar}>
    <h3>Categories</h3>
    <ul style={styles.list}>
      <li>React</li>
      <li>JavaScript</li>
      <li>Web Development</li>
    </ul>
  </aside>
);

const styles = {
  sidebar: {
    width: "200px",
    padding: "20px",
    border: "1px solid #ddd",
    marginRight: "20px",
  },
  list: {
    listStyleType: "none",
    paddingLeft: "0",
  },
};

export default Sidebar;
