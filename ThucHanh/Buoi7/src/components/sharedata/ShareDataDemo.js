import React from "react";
import TemperatureInput from "./TemperatureInput";

class ShareDataDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "",
    };
  }

  _onChangeInput = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <div style={{ width: "300px" }}>
        <TemperatureInput
          temperatureType="Celsius"
          onchangeInput={this._onChangeInput}
        />
        <TemperatureInput temperatureType="Fahrenheit" />
      </div>
    );
  }
}
export default ShareDataDemo;
