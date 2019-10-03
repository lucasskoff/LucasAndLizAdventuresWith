import React, { Component } from 'react';
import '../../stylesheet/TextStyle.css';

class About extends Component {

    render() {
        var screenSize = {
            width: this.props.width,
            height: this.props.height,
        }
        return (
            <div style={this.screenSize}>
                    <div className='text' style={screenSize}>Welcome to our page. :)</div>
            </div>
        );
    }
}

export default About;