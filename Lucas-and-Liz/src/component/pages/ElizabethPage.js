import React, { Component } from 'react';
import '../../stylesheet/TextStyle.css';
import Gallery from '../PhotoGrid';

class ElizabethPage extends Component {

    render() {
        var screenSize = {
            width: this.props.width,
            height: this.props.height,
        }
        return (
            <div style={this.screenSize}>
                    <Gallery galleryId={this.props.galleryId}/>
            </div>
        );
    }
}

export default ElizabethPage;