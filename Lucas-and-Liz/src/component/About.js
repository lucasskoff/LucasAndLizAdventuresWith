import React, { Component } from 'react';
import '../stylesheet/TextStyle.css';
import Gallery from './Gallery';

class About extends Component {

    render() {
        var screenSize = {
            width: this.props.width,
            height: this.props.height,
        }
        return (
            <div style={this.screenSize}>
                {this.props.name === "Welcome" ?
                    <div className='text' style={screenSize}>Welcome to our page. :)</div> :
                    <Gallery/>
                }
            </div>
        );
    }
}

export default About;