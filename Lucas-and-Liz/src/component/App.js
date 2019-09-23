import React, { Component } from 'react';
import { isMobile } from 'mobile-device-detect';
import Letter from './Letter';
import Gallery from './Gallery';
import About from './About';
import NavBar from './NavBar';
import logo from '../assets/LucasAndLizLogo.png'
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { page: "Home", width: "100%", height: 1170, bgColor: "#333" };
        this.changePage = this.changePage.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    createHeader() {
        const letters = ["A", "D", "V", "E", "N", "T", "U", "R", "E", "S", "", "W", "I", "T", "H"];
        const lettersDisplay = letters.map((letter, index) => {
            var picker = Math.floor(Math.random() * 3) + 1;
            var cssHSL = "rgb(" + this.generateColor() + ","
                + this.generateColor() + "," + this.generateColor() + ")";
            if (letter === "") {
                if (isMobile) {
                    return <br />
                } else {
                    return <span><Letter key={index} bgcolor={this.state.bgColor}>{letter}</Letter></span>
                }
            } else {
                return <span><Letter key={index} bgcolor={cssHSL}>{letter}</Letter></span>
            }
        });
        return (
            <div>{lettersDisplay}
            </div>
        );
    }

    generateColor() {
        return 25 + 256 * Math.random();
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
        } else if (page === "Home") {
            return <About width={this.state.width} height={this.state.height} name="Welcome" />
        } else if (page === "Lucas") {
            return <About width={this.state.width} height={this.state.height} name="Lucas" />
        } else if (page === "Elizabeth") {
            return <About width={this.state.width} height={this.state.height} name="Elizabeth" />
        }
    }

    render() {
        return (
            <div>
                <img src={logo} alt="Logo"/>
                {this.createHeader()}
                <NavBar onClick={this.changePage} />
                {this.setPage(this.state.page)}

            </div>
        );
    }
}

export default App;

