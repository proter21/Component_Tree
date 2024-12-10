// src/components/Footer.jsx
import React from "react";

const Footer = () => (
  <footer style={styles.footer}>
    <p>&copy; 2024 React Blog. All rights reserved.</p>
  </footer>
);

const styles = {
  footer: {
    backgroundColor: "#282c34",
    color: "white",
    textAlign: "center",
    padding: "10px 0",
    marginTop: "20px",
  },
};

export default Footer;
