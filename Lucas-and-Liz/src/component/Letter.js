import React from 'react';
import {isMobile} from 'mobile-device-detect';

class Letter extends React.Component {
  render() {
    var letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 32,
      textAlign: "center"
    }
    var mobileLetterStyle = {
      padding: 5,
      margin: 5,
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: 35,
      textAlign: "center"
    }
    return (
      <div style={isMobile ? mobileLetterStyle : letterStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default Letter;
