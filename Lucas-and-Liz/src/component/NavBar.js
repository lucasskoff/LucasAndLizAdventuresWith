import React, { Component } from 'react';
import { isMobile } from 'mobile-device-detect';
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
        var liStylePC = {
            display: 'inline-block'
        };
        var liStyleMobile = {
            display: 'grid'
        };
        return (
            <div className='table'>
                <ul className='topnav' onClick={this.handleClick}>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Gallery" className={this.currentActive === "Gallery" ? "active" : "inactive"}>Gallery</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Lucas" className={this.currentActive === "Lucas" ? "active" : "inactive"}>Lucas</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Elizabeth" className={this.currentActive === "Elizabeth" ? "active" : "inactive"}>Elizabeth</span></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
