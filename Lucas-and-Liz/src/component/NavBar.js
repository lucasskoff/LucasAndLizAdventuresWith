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
            display: 'inline-block',
            width: '100px',
        };
        return (
            <div className='table'>
                <ul className='topnav' onClick={this.handleClick}>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Gallery" className={this.currentActive === "Gallery" ? "active" : "inactive"}>Gallery</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Sister" className={this.currentActive === "Sister" ? "active" : "inactive"}>{'Sister\'s Visit'}</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Europe" className={this.currentActive === "Europe" ? "active" : "inactive"}>Europe</span></li>
                    <li style={isMobile ? liStyleMobile : liStylePC}><span id="Video" className={this.currentActive === "Video" ? "active" : "inactive"}>Bachata</span></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
