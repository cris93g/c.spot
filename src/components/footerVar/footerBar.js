import React from "react";
import "./footerBar.css";
import { Link } from "react-router-dom";

var style = {
  backgroundColor: "silver",
  borderTop: "1px solid silver",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  left: "0",
  bottom: "0",
  height: "30px",
  width: "100%"
};

var phantom = {
  display: "block",
  padding: "20px",
  height: "40px",
  width: "100%"
};

function Footer({ children }) {
  return (
    <div>
      <div style={phantom} />

      <div style={style}>
        {children}
        <Link to="/">
          <i class="material-icons md-60">home</i>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
