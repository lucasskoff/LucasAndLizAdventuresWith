import React, { Component } from 'react';
import {isMobile} from 'mobile-device-detect';
import Letter from './Letter';
import Gallery from './Gallery';
import AboutLucas from './AboutLucas';
import AboutElizabeth from './AboutElizabeth';
import NavBar from './NavBar';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { page: "Gallery" }
        this.changePage = this.changePage.bind(this);
    }

    createHeader() {
        return (
            <div>
                <Letter bgcolor="#58B3FF">L</Letter>
                <Letter bgcolor="#FF605F">U</Letter>
                <Letter bgcolor="#FFD52E">C</Letter>
                <Letter bgcolor="#49DD8E">A</Letter>
                <Letter bgcolor="#AE99FF">S</Letter>
                {isMobile ? <br/> : <Letter bgcolor="#333"> </Letter>}
                <Letter bgcolor="#FF605F">A</Letter>
                <Letter bgcolor="#FFD52E">N</Letter>
                <Letter bgcolor="#49DD8E">D</Letter>
                {isMobile ? <br/> : <Letter bgcolor="#333"> </Letter>}
                <Letter bgcolor="#58B3FF">L</Letter>
                <Letter bgcolor="#FF605F">I</Letter>
                <Letter bgcolor="#FFD52E">Z</Letter>
                {isMobile ? <div>THIS IS MOBILE</div> : <div>THIS IS NOT MOBILE</div>}
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
        if(page === "Gallery"){
            return <Gallery/>
        } else if (page === "Lucas") {
            return <AboutLucas/>
        } else if (page === "Elizabeth") {
            return <AboutElizabeth/>
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

