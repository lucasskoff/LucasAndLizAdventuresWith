/** Created by  Albert Juhé Lluveras
  https://github.com/Aljullu/react-flickr-gallery/blob/master/src/components/Photo/Photo.jsx
*/
import React from 'react';
import PropTypes from 'prop-types';
import {LazyLoadImage} from 'react-lazy-load-image-component';

import './photo.css';

/**
 * Photo presentational component
 */
class Photo extends React.Component {
  render() {
    const {scrollPosition, title, url} = this.props;

    const placeholder = (<div className="photo-placeholder"></div>);

    return (
      <div>
        <div className="photo-credits">
          <div className="photo-title">
            {title}
          </div>
        </div>
        <LazyLoadImage
          alt={title}
          className="photo-img"
          placeholder={placeholder}
          scrollPosition={scrollPosition}
          src={url} />
      </div>
    );
  }
}

Photo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Photo;