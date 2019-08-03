import React, { Component } from 'react';

const API_KEY = '&api_key=5f356f10c4288fa658f9be659201e7cd';
const JSON = '&format=json&nojsoncallback=1';
const API = 'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos' + API_KEY + '&gallery_id=72157710018434537' + JSON;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            albums: []
        };
    }

    componentDidMount() {
        fetch(API)
            .then(response => response.json())
            .then(data => this.setState({ albums: data.photos.photo }));
    }

    render() {
        const { albums } = this.state;

        return (
            <ul>
                {albums.map(album =>
                    <li key={album.id}>
                        {album.title}
                    </li>
                )}
            </ul>
        );
    }
}

export default App;