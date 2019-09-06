import React, { Component } from 'react';
import './NavBar.css';
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (e) {
        const page = e.target.id
        if (page) {
            this.props.onClick(page);
        }
    }

    render() {
        return (
            <div className='table'>
                <ul className='topnav' onClick={this.handleClick}>
                    <li><span id="Gallery">Gallery</span></li>
                    <li><span id="Lucas">About Lucas</span></li>
                    <li><span id="Elizabeth">About Elizabeth</span></li>
                </ul>
            </div>
        );
    }
}

export default NavBar;
