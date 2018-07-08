import React from "react";
import "./containers.css";
import image from "../IMG/0507632_770727.jpg";
import image2 from "../IMG/496901_589135_01_front_thumbnail.jpg";
import image3 from "../IMG/485103_399386_01_front_thumbnail.jpg";
import image4 from "../IMG/0475912_249102.jpg";
import image5 from "../IMG/0463470_056358.jpg";
import image6 from "../IMG/482679_364711_01_front_thumbnail.jpg";
import { Link } from "react-router-dom";
const Containers = props => {
  return (
    <div className="Containers">
      <div class="first">
        <div id="laptop">
          <Link to="/laptops">
            <img class="images" src={require("../IMG/0507632_770727.jpg")} />{" "}
          </Link>
        </div>
        <div id="desktop">
          <img
            class="images"
            src={require("../IMG/496901_589135_01_front_thumbnail.jpg")}
          />
        </div>
      </div>
      <div class="second">
        <div id="accersories">
          <img
            class="images"
            src={require("../IMG/485103_399386_01_front_thumbnail.jpg")}
          />
        </div>
        <div id="software">
          <img class="images" src={require("../IMG/0475912_249102.jpg")} />
        </div>
      </div>
      <div class="third">
        <div id="games">
          <img class="images" src={require("../IMG/0463470_056358.jpg")} />
        </div>
        <div id="tv">
          <img
            class="images"
            src={require("../IMG/482679_364711_01_front_thumbnail.jpg")}
          />
        </div>
      </div>
    </div>
  );
};

export default Containers;
