import React from "react";
import "./Header.css";
import logo from "../IMG/COMPUTER.png";

var style = {
  backgroundColor: "silver",
  borderTop: "1px solid silver",
  textAlign: "center",
  padding: "20px",
  position: "fixed",
  top: "0px",
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

function Header({ children }) {
  return (
    <div>
      <div style={phantom} />

      <div style={style}>
        {children}
        {/* <img class="img" src={require("../IMG/COMPUTER.png")} /> */}
      </div>
    </div>
  );
}

export default Header;
