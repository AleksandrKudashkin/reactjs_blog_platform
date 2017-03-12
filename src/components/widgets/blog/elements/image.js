import React, { PropTypes } from 'react';
import { Image } from 'semantic-ui-react';

const ImageItem = ({ src, width, height, alt }) => (
  React.createElement(Image,
    {
      src
    , width
    , height
    , alt
    })
);

Image.defaultProps = {
  src: 'http://icons.iconarchive.com/icons/guillendesign/variations-3/256/Default-Icon-icon.png',
  width: 50,
  height: 50,
  alt: 'Default Image'
};

ImageItem.propTypes = {
  src: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alt: PropTypes.string
};

export default ImageItem;
