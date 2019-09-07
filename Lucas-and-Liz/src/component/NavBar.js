import React, { Component } from 'react';
import { isMobile } from 'mobile-device-detect';
import '../stylesheet/NavBar.css';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.currentActive = "Home";
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
        var liStylePC = {
            display: 'inline-block'
        };
        var liStyleMobile = {
            display: 'inline-block'
        };
        return (
            <div className='table'>
                <ul className='topnav' onClick={this.handleClick}>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Home" className={this.currentActive === "Home" ? "active" : "inactive"}>Home</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Gallery" className={this.currentActive === "Gallery" ? "active" : "inactive"}>Gallery</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Lucas" className={this.currentActive === "Lucas" ? "active" : "inactive"}>{isMobile ? 'Lucas' : 'About Lucas'}</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Elizabeth" className={this.currentActive === "Elizabeth" ? "active" : "inactive"}>{isMobile ? 'Elizabeth' : 'About Elizabeth'}</span></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
