import React from "react";
import "./dropDown.css";
import { Link } from "react-router-dom";

const Dropdown = props => {
  return (
    <div className="Containers">
      <div class="container">
        <div class="card-container">
          <div class="card">
            <div class="front">
              <div class="card-img">
                <img
                  src="https://i0.wp.com/www.techweez.com/wp-content/uploads/2017/11/Parallels-for-Mac.png?resize=640%2C375"
                  alt="ccr"
                />
              </div>
              <div class="card-body">
                <h3>LAPTOP</h3>
              </div>
            </div>
            <div class="back">
              <p>
                <span>MAC</span>, mac crazy
              </p>
              <ul>
                <li>test</li>
                <li>yea </li>
                <li>probs</li>
                <li>na</li>
              </ul>
              <br />
              <button>Buy now!</button>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="card">
            <div class="front">
              <div class="card-img">
                <img
                  src="https://brain-images-ssl.cdn.dixons.com/2/1/10167312/u_10167312.jpg"
                  alt="ccr"
                />
              </div>
              <div class="card-body">
                <h3>DESKTOP</h3>
              </div>
            </div>
            <div class="back">
              <p>
                <span>not mac</span> yea pretty crazy
              </p>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
              <button>Buy now!</button>
            </div>
          </div>
        </div>

        <div class="card-container">
          <div class="card">
            <div class="front">
              <div class="card-img">
                <img
                  src="https://canamwireless.com/wp-content/uploads/2017/12/it-hardware-computer-keyboards.jpg"
                  alt="ccr"
                />
              </div>
              <div class="card-body">
                <h3>ACESSORIES</h3>
              </div>
            </div>
            <div class="back">
              <p>
                <span>test</span> test{" "}
              </p>
              <ul>
                <li>test</li>
                <li>test</li>
                <li>test</li>
                <li>test</li>
              </ul>
              <Link to="/laptops">
                <button>Buy now!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
