import React from 'react';

class Letter extends React.Component {
  render() {
    var letterStyle = {
      padding: '1vw',
      margin: '1vw',
      backgroundColor: this.props.bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: '3vw',
      textAlign: "center"
    }
    return (
      <div style={letterStyle}>
        {this.props.children}
      </div>
    );
  }
}

export default Letter;
