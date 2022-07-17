import React from 'react';
import TemperatureInput from './TemperatureInput';

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '' // celsius (default)
        };
    }

    toCelsius = (fahrenheit) => {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit = (celsius) => {
        return (celsius * 9 / 5) + 32;
    }

    handleCelsiusChange = (celsius) => {
        this.setState({
            temperature: celsius
        });
    }

    handleFahrenheitChange = (fahrenheit) => {
        this.setState({
            temperature: this.toCelsius(fahrenheit)
        });
    }

    render() {
        const celsius = this.state.temperature === "" ? "" : this.state.temperature;
        const fahrenheit = this.state.temperature === "" ? "" : this.toFahrenheit(this.state.temperature);

        return (
            <div>
                <TemperatureInput
                    temperature={celsius}
                    typeTemperature="Celsius"
                    onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput
                    temperature={fahrenheit}
                    typeTemperature="Fahrenheit"
                    onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        );
    }
}

export default Calculator;

