import React, { Component } from 'react';
import Letter from './Letter';
import Gallery from './Gallery';
class App extends Component {

    createHeader() {
        return (
            <div>
                <Letter bgcolor="#58B3FF">L</Letter>
                <Letter bgcolor="#FF605F">U</Letter>
                <Letter bgcolor="#FFD52E">C</Letter>
                <Letter bgcolor="#49DD8E">A</Letter>
                <Letter bgcolor="#AE99FF">S</Letter>
                <Letter bgcolor="white"> </Letter>
                <Letter bgcolor="#FF605F">A</Letter>
                <Letter bgcolor="#FFD52E">N</Letter>
                <Letter bgcolor="#49DD8E">D</Letter>
                <Letter bgcolor="white"> </Letter>
                <Letter bgcolor="#58B3FF">L</Letter>
                <Letter bgcolor="#FF605F">I</Letter>
                <Letter bgcolor="#FFD52E">Z</Letter>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.createHeader()}
                <Gallery />

            </div>
        );
    }
}

export default App;

