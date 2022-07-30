import React from "react";
import TemperatureInputUSDVN from "./TemperatureInputUSDVN";

class CalculatorUSDVN extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: "", // celsius (default)
    };
  }

  toCelsius = (VN) => {
    return VN * 32632;
  };

  toFahrenheit = (USD) => {
    return USD / 32632;
  };

  handleCelsiusChange = (USD) => {
    this.setState({
      temperature: USD,
    });
  };

  handleFahrenheitChange = (VN) => {
    this.setState({
      temperature: this.toCelsius(VN),
    });
  };

  render() {
    const celsius = this.state.temperature === "" ? "" : this.state.temperature;
    const fahrenheit =
      this.state.temperature === ""
        ? ""
        : this.toFahrenheit(this.state.temperature);

    return (
      <div>
        <TemperatureInputUSDVN
          temperature={celsius}
          typeTemperature="USD"
          onTemperatureChange={this.handleCelsiusChange}
        />
        <TemperatureInputUSDVN
          temperature={fahrenheit}
          typeTemperature="VN"
          onTemperatureChange={this.handleFahrenheitChange}
        />
      </div>
    );
  }
}

export default CalculatorUSDVN;
