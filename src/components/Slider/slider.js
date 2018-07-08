import React from "react";
import "./slider.css";
import background from "./sliderImg/pexels-photo-825262.jpg";
import background2 from "./sliderImg/pexels-photo-1068523.jpg";
import background3 from "./sliderImg/pexels-photo-669615.jpg";

const Slider = props => {
  //   let sliderImages = document.querySelectorAll(".slide"),
  //     arrowLeft = document.querySelector("#arrow-left"),
  //     arrowRight = document.querySelector("#arrow-right"),
  //     current = 0;

  //   function reset() {
  //     for (let i = 0; i < sliderImages.length; i++) {
  //       sliderImages[i].style.display = "none";
  //     }
  //   }

  //   function startSLide() {
  //     reset();
  //     sliderImages[0].style.display = "block";
  //   }

  //   function slideLeft() {
  //     reset();
  //     sliderImages[current - 1].style.display = "block";
  //     current--;
  //   }
  //   arrowLeft.addEventListener("click", function() {
  //     if (current === 0) {
  //       current = sliderImages.length;
  //     }
  //     slideLeft();
  //   });
  return (
    <div className="Slider">
      <div>
        <div class="wrap">
          <div id="arrow-left" class="arrow" />
          <div id="arrow-right" class="arrow" />
          <div id="slider">
            <div class="slide slide1" />
            {/* <div class="slide-content" /> */}
            <span>
              <img
                class="slide"
                src={require("./sliderImg/pexels-photo-825262.jpg")}
              />
            </span>
            {/* <div class="slide slide2" /> */}
            {/* <div class="slide-content" /> */}
            <span>
              <img
                class="slide"
                src={require("./sliderImg/pexels-photo-1068523.jpg")}
              />
            </span>
            <div class="slide slide3" />
            {/* <div class="slide-content" /> */}
            <span>
              <img
                class="slide"
                src={require("./sliderImg/pexels-photo-669615.jpg")}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
