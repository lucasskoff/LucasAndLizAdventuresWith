import React, { Component } from 'react';

const API_KEY = '&api_key=5f356f10c4288fa658f9be659201e7cd';
const JSON = '&format=json&nojsoncallback=1';
const GET_PHOTOS = 'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos' + API_KEY + '&photoset_id=72157710017493861' + JSON;
const GET_PHOTO = 'https://api.flickr.com/services/rest/?method=flickr.photos.getInfo' + API_KEY;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        fetch(GET_PHOTOS)
            .then(response => response.json())
            .then(data => this.setState({ albums: data.photoset.photo }));
    }

    render() {
        const { albums } = this.state;
        return (
            <div>
                {albums.map(album =>
                    <div key={album.id}>
                        {album.title}
                    </div>
                )}
            </div>
        );
    }
}

export default App;