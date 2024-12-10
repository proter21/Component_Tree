// src/components/Header.jsx
import React from "react";

const Header = () => (
  <header style={styles.header}>
    <h1>React Blog</h1>
    <nav>
      <a href="/" style={styles.link}>
        Home
      </a>
      <a href="/about" style={styles.link}>
        About
      </a>
    </nav>
  </header>
);

const styles = {
  header: {
    backgroundColor: "#282c34",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
  },
  link: {
    margin: "0 10px",
    color: "white",
    textDecoration: "none",
  },
};

export default Header;
