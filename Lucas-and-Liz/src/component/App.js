import React, { Component } from 'react';
import { isMobile } from 'mobile-device-detect';
import Letter from './Letter';
import Home from './Home';
import Gallery from './Gallery';
import About from './About';
import NavBar from './NavBar';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { page: "Home", width: "100%", height: 1170 };
        this.changePage = this.changePage.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    createHeader() {
        const letters = ["L", "U", "C", "A", "S", "", "A", "N", "D", "", "L", "I", "Z"];
        const lettersDisplay = letters.map((letter, index) => {
            var cssHSL = "hsl(" + 500 * Math.random() + ',' +
                (100 * Math.random()) + '%,' +
                (60 + 10 * Math.random()) + '%)';
            if (letter === "") {
                if (isMobile) {
                    return <br/>
                } else {
                    return <span><Letter key={index} bgcolor="#333">{letter}</Letter></span>
                }
            } else {
                return <span><Letter key={index} bgcolor={cssHSL}>{letter}</Letter></span>
            }
        });
        return (
            <div>{lettersDisplay}</div>
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
                {this.createHeader()}
                <NavBar onClick={this.changePage} />
                {this.setPage(this.state.page)}

            </div>
        );
    }
}

export default App;

