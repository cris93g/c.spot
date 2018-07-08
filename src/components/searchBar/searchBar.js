import React, { Component } from "react";

const searchBar = props => {
  return (
    <form>
      <input style={{ margin: "20px auto" }} type="text" name="search items" />
      <button> Submit</button>
    </form>
  );
};

export default searchBar;
