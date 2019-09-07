import React, { Component } from 'react';
import { isMobile } from 'mobile-device-detect';
import Letter from './Letter';
import Gallery from './Gallery';
import About from './About';
import NavBar from './NavBar';
class App extends Component {

    constructor(props) {
        super(props);
        const pages = ["Gallery", "About Lucas", "About Elizabeth"];
        this.state = { page: "Gallery", width: 841, height:  1367 };
        this.changePage = this.changePage.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    createHeader() {
        return (
            <div>
                <Letter bgcolor="#58B3FF">L</Letter>
                <Letter bgcolor="#FF605F">U</Letter>
                <Letter bgcolor="#FFD52E">C</Letter>
                <Letter bgcolor="#49DD8E">A</Letter>
                <Letter bgcolor="#AE99FF">S</Letter>
                {isMobile ? <br /> : <Letter bgcolor="#333"> </Letter>}
                <Letter bgcolor="#FF605F">A</Letter>
                <Letter bgcolor="#FFD52E">N</Letter>
                <Letter bgcolor="#49DD8E">D</Letter>
                {isMobile ? <br /> : <Letter bgcolor="#333"> </Letter>}
                <Letter bgcolor="#58B3FF">L</Letter>
                <Letter bgcolor="#FF605F">I</Letter>
                <Letter bgcolor="#FFD52E">Z</Letter>
            </div>
        )
    }

    changePage(newPage) {
        if (newPage !== this.state.page) {
            this.setState({
                page: newPage
            })
        };
    }

    setPage(props) {
        const page = props;
        if (page === "Gallery") {
            return <Gallery />
        } else if (page === "Lucas") {
            return <About screenWidth={this.state.width} screenHeight={this.state.height} name="Lucas"/>
        } else if (page === "Elizabeth") {
            return <About  screenWidth={this.state.width} screenHeight={this.state.height} name="Elizabeth"/>
        }
    }

    render() {
        return (
            <div>
                {this.createHeader()}
                <NavBar onClick={this.changePage} />
                {this.setPage(this.state.page)}

            </div>
        );
    }
}

export default App;

