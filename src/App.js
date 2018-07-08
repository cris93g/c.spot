import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import "./App.css";
import store from "./redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header/Header";
import Footer from "./components/footerVar/footerBar";
import SearchBar from "./components/searchBar/searchBar";
import Items from "./components/ITEMS/Items";
import img from "./components/IMG/computer-cookies-desk-933154.jpg";
import Containers from "./components/Containers/containers";
import Slider from "./components/Slider/slider";
import routes from "./routes";
import Dropdown from "./components/Dropdown/Dropdown";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <p />
            <Header />
            <img
              class="img"
              src={require("./components/IMG/computer-cookies-desk-933154.jpg")}
            />
            {/* <SearchBar /> */}
            {/* <Slider /> */}
            {/* <Containers /> */}

            {routes}
            {/* {Containers} */}
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
