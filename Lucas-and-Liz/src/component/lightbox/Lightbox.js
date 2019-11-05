/** Created by  Albert Juhé Lluveras
  https://github.com/Aljullu/react-flickr-gallery/blob/master/src/components/Lightbox/Lightbox.jsx
*/ 

import React from 'react';
import PropTypes from 'prop-types';

import './lightbox.css';

/**
 * Lightbox Presentational component
 */
export default class Lightbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {onClose} = this.props;
    const {date, description, link, title, url} = this.props.photo;

    return (
      <div className="lightbox" onClick={onClose}>
        <div className="lightbox-credits">
          <div className="lightbox-title">
            {title}
          </div>
          <div className="lightbox-description">
            {description}
          </div>
        </div>
        <img
          alt={title}
          className="lightbox-img"
          src={url} />
      </div>
    );
  }
}

Lightbox.propTypes = {
  onClose: PropTypes.func.isRequired,
  photo: PropTypes.shape({
    date: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
    title: PropTypes.string.isRequired,
    url: PropTypes.string
  }).isRequired
};