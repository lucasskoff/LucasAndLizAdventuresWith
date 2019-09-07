import React, { Component } from 'react';
import './stylesheet/TextStyle.css';

class AboutElizabeth extends Component {

    render() {
        var screenSize = {
            width: 841,
            height: 1367,
        }
        return (
            <div style={this.screenSize}>
                <div className='text' style={screenSize}>{this.props.name} is also cool!</div>
            </div>
        );
    }
}

export default AboutElizabeth;