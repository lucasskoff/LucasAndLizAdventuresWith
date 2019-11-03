import React, { Component } from 'react';

import LightboxContainer from './lightbox/LightboxContainer';
//import PhotoContainer from '../PhotoContainer/PhotoContainer.jsx';

const API_KEY = '&api_key=5f356f10c4288fa658f9be659201e7cd';
const JSON = '&format=json&nojsoncallback=1';
const GET_PHOTOS = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos' + API_KEY;

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            gallery: null
        };
    }

    formatUrl(farm, server, id, secret) {
        return 'http://farm' + farm + '.staticflickr.com/' +
            server + '/' + id + '_' + secret + '.jpg'
    }

    parsePhoto(data) {
        const photos = data.map((data) => {
            const farm = data.farm;
            const server = data.server;
            const dataID = data.id;
            const secret = data.secret;
            const title = data.title;
            return {
                id: dataID,
                title: title,
                url: this.formatUrl(farm, server, dataID, secret),
            };
        });

        return photos;
    }

    componentDidMount() {
        var albumUrl = GET_PHOTOS + '&photoset_id=' + this.props.galleryId + JSON;
        fetch(albumUrl)
            .then(response => response.json())
            .then(data => this.setState({ albums: this.parsePhoto(data.photoset.photo) }));
        this.setState({
            gallery: albumUrl
        });
    }

    render() {
        const { albums } = this.state;
        var imageStyle = {
            maxWidth: "100%"
        }
        var grid = {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridGap: '15px'
        }
        return (
            <div style={grid}>
                {albums.map(album =>
                    <div key={album.url}>
                        <img src={album.url} style={imageStyle} alt={album.url.toString()}></img>
                    </div>
                )}
            </div>
        );
    }
}

export default Gallery;