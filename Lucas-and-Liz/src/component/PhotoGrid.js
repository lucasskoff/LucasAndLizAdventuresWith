import React, { Component } from 'react';

import LightboxContainer from './lightbox/LightboxContainer';
import PhotoContainer from './photo/PhotoContainer';

const API_KEY = '&api_key=5f356f10c4288fa658f9be659201e7cd';
const JSON = '&format=json&nojsoncallback=1';
const GET_PHOTOS = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos' + API_KEY;

class Gallery extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: [],
            selectedPhoto: null,
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

    onSelectPhoto(photoId) {
        return () => {
            this.setState({
                selectedPhoto: photoId
            });
        };
    }

    getSelectedPhotoData() {
        const { albums, selectedPhoto } = this.state;

        if (selectedPhoto) {
            return albums.filter((photo) => photo.id === selectedPhoto)[0];
        }

        return null;
    }

    render() {
        const {scrollPosition} = this.props;
        const { albums } = this.state;

        const selectedPhotoData = this.getSelectedPhotoData();
        
        return (
            <div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/m6lk_TkKP9Q" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                {albums.map((photo) =>
                    <PhotoContainer
                        key={photo.id}
                        onSelect={this.onSelectPhoto(photo.id).bind(this)}
                        photo={photo}
                        scrollPosition={scrollPosition} />
                )}
                {selectedPhotoData ?
                    <LightboxContainer
                        onClose={this.onSelectPhoto(null).bind(this)}
                        photo={selectedPhotoData} /> :
                    null}
            </div>
        );
    }
}

export default Gallery;