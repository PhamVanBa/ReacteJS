import Header from "./component/Header";
import Footer from "./component/Footer";
import "./App.css";
import React from "react";
import HomePage from "./component/HomePage";
import BodyHorizontal from "./component/BodyHorizontal";
import BodyVertical from "./component/BodyVertical";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      direction: "horizontal",
    };
  }

  changeDirection(d) {
    this.setState({
      direction: d,
    });
  }

  render() {
    return (
      <div>
        <button onClick={() => this.changeDirection("horizontal")}>
          Display first way
        </button>
        <button onClick={() => this.changeDirection("verical")}>
          Display second way
        </button>

        <HomePage
          top={<Header />}
          main={
            this.state.direction === "verical" ? (
              <BodyVertical />
            ) : (
              <BodyHorizontal />
            )
          }
          bottom={<Footer />}
        />
      </div>
    );
  }
}

export default App;
