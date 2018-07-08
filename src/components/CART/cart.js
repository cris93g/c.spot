import REACT from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }
  componentDidMount() {
    axios.get("/api/cart").then(res => {
      this.setState({ cart: res.data });
    });
  }
  render() {
    return <div className="App">no</div>;
  }
}

export default Cart;
