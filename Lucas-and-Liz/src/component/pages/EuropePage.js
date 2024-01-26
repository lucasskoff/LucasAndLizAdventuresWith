import React, { Component } from 'react';
import '../../stylesheet/TextStyle.css';
import Gallery from '../PhotoGrid';

class EuropePage extends Component {

    render() {
        return (
            <div style={this.screenSize}>
                    <Gallery galleryId={this.props.galleryId}/>
            </div>
        );
    }
}

export default EuropePage;