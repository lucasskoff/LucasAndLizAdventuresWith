import React, { Component } from 'react';
import ReactPlayer from "react-player"
import './video.css';

class Video extends Component {
    render() {
        return (
            <div class="video">
                <ReactPlayer
                    url="https://www.youtube.com/embed/m6lk_TkKP9Q"
                />
            </div>
        );
    }
}

export default Video;