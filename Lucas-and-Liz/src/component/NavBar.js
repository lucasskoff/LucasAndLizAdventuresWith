import React, { Component } from 'react';
import '../stylesheet/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.currentActive = "Gallery";
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        const page = e.target.id
        if (page) {
            this.currentActive = page;
            this.props.onClick(page);
        }
    }

    render() {
        return (
            <div className='table'>
                <ul className='topnav' onClick={this.handleClick}>
                    <li><span id="Gallery" className={this.currentActive === "Gallery" ? "active" : "inactive"}>Gallery</span></li>
                    <li><span id="Lucas" className={this.currentActive === "Lucas" ? "active" : "inactive"}>About Lucas</span></li>
                    <li><span id="Elizabeth" className={this.currentActive === "Elizabeth" ? "active" : "inactive"}>About Elizabeth</span></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
