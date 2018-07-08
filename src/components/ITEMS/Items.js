import React, { Component } from "react";
import { connect } from "react-redux";
import { getElectronics } from "../../redux/ducks/electronicsReducer";
import { Link } from "react-router-dom";

class Items extends Component {
  componentDidMount() {
    this.props.getElectronics();
  }
  render() {
    const { isLoading, electronics } = this.props;

    const electronicsDisplay = isLoading ? (
      <p>Loading...</p>
    ) : (
      electronics.map(electronic => {
        return (
          <div className="Containers">
            <div class="container">
              <div class="card-container">
                <div class="card">
                  <div class="front">
                    <div class="card-img">
                      <img src={electronic.img_url} />
                    </div>
                    <div class="card-body">
                      <p>{electronic.name}</p>
                    </div>
                  </div>
                  <div class="back">
                    <ul>
                      <li>{electronic.description}</li>{" "}
                      <li>{electronic.price}</li>
                    </ul>
                    <br />
                    <Link to="/">
                      <button>Buy now!</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );

    return <div>{electronicsDisplay}</div>;
    console.log(electronicsDisplay);
  }
}
const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  { getElectronics }
)(Items);
