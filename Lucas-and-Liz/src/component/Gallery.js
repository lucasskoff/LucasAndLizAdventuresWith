import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
const API_KEY = '&api_key=5f356f10c4288fa658f9be659201e7cd';
const JSON = '&format=json&nojsoncallback=1';
const GET_PHOTOS = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos' + API_KEY + '&photoset_id=72157710017493861' + JSON;

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
        fetch(GET_PHOTOS)
            .then(response => response.json())
            .then(data => this.setState({ albums: this.parsePhoto(data.photoset.photo) }));
        this.setState({
            gallery: GET_PHOTOS
        });
    }

    render() {
        const { albums } = this.state;
        var mobileStyle = {
            flex: 1,
            maxWidth: '100%'
        }
        return (
            <div>
                {albums.map(album =>
                    <div>
                        <img src={album.url} style={mobileStyle}></img>
                    </div>
                )}
            </div>
        );
    }
}

export default Gallery;