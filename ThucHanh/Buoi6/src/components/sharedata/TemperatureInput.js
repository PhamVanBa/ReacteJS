import React from "react";

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }
  _onChange = (e) => {
    // console.log(e.target.value);
    this.props.onChangeInput(e);
  };

  render() {
    return (
      <fieldset>
        <legend>Enter Temperature in {this.props.temperaturType}</legend>
        <input
          styl={{ height: "30px", width: "100%" }}
          onChange={this._onChange}
        />
      </fieldset>
    );
  }
}
export default TemperatureInput;
