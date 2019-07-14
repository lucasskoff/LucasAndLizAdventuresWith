import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to=""> Home </Link></li>
          <li className="navButton"><Link style={{ textDecoration: 'none' }} to="">Lucas's Resume</Link></li>
        </ul>
      </header>
    )
  }
}

export default NavBar;