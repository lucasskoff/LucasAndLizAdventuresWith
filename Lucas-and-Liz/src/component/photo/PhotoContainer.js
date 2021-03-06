/** Created by  Albert Juhé Lluveras
  https://github.com/Aljullu/react-flickr-gallery/blob/master/src/components/PhotoContainer/PhotoContainer.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

/**
 * Photo container
 */
export default class PhotoContainer extends React.Component {
  render() {
    const {onSelect, photo, scrollPosition} = this.props;

    return (
      <div
        className="photo"
        onClick={onSelect}
        ref="photo">
        <Photo
          title={photo.title}
          url={photo.url}
          scrollPosition={scrollPosition} />
      </div>
    );
  }
}

PhotoContainer.propTypes = {
  onSelect: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired
};