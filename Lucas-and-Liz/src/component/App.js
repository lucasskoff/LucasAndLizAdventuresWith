import React, { Component } from 'react';
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

    createHeader(letters) {
        const lettersDisplay = letters.map((letter, index) => {
            var cssHSL = "rgb(" + this.generateColor() + ","
                + this.generateColor() + "," + this.generateColor() + ")";

            return <span><Letter key={index} bgcolor={cssHSL}>{letter}</Letter></span>
        });

        return (
            <div>{lettersDisplay}</div>
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
            return <Gallery galleryId="72157710017493861"/>
        } else if (page === "Home") {
            return <About width={this.state.width} height={this.state.height} name="Welcome" />
        } else if (page === "Lucas") {
            return <Gallery galleryId="72157711165736866"/>
        } else if (page === "Elizabeth") {
            return <Gallery galleryId="72157711169399278"/>
        }
    }

    render() {
        var imageStyle = {
            maxWidth: "100%"
        }
        const firstWord = ["A", "D", "V", "E", "N", "T", "U", "R", "E", "S"];
        const secondWord = ["W", "I", "T", "H"];
        return (
            <div>
                <img style={imageStyle} src={logo} alt="Logo" />
                {this.createHeader(firstWord)}
                {this.createHeader(secondWord)}
                <NavBar onClick={this.changePage} />
                {this.setPage(this.state.page)}

            </div>
        );
    }
}

export default App;

