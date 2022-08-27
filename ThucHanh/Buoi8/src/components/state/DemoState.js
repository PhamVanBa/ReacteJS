import { Component } from 'react';

class DemoState extends Component {
    constructor(props) {
        super(props);

        //init state
        this.state = {
            count:0,
            titleColor: 'red'
        }
    }

    handleClickLogin = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleChangeColor = () => {
        this.setState({
            //titleColor: this.state.titleColor === 'red' ? 'green' : 'red'
            titleColor: this.getRandomColor()
        })
    }

    getRandomColor = () => {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for(let i = 0; i < 6; i ++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    render () {
        console.log('Demo state render...')

        return (
            <div className='demo-state'>
                <h1 style={{color: this.state.titleColor}}>{this.props.name}</h1>
                <h3>Count statte: {this.state.count}</h3>
                <button onClick={this.handleClickLogin}>Login</button>
                <button onClick={this.handleChangeColor}>Change Color</button>
            </div>
        )
    }

}

export default DemoState;
