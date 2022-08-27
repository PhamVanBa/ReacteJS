import { Component } from 'react';

import './Nav.css';

class Nav extends Component {
    constructor(props) {
        super(props);
    }

    handleSendTime  = () => {
        let timeNow = new Date();
        this.props.functionProp(timeNow);
    }
    
    render() {
        //console.log(this.props);

        return (
            <div className='nav'>
                {/* <h1>{this.props.title}</h1>
                <h3>Hello&nbsp;{this.props.username}</h3>
                <button onClick={this.handleSendTime}>Send Time</button> */}
                Navbar
            </div>
        )
    }
}

export default Nav;