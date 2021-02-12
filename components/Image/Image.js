import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

function Image({ source, alt = 'Some Image' }) {
  return (
    <Zoom>
      <img alt={alt} src={source} />
    </Zoom>
  );
}
export default Image;
