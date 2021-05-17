import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import Images from 'next/image'

function Image({ source, alt = 'Some Image' }) {
  return (
    <Zoom>
      <Images quality={100} height={470} width={820} alt={alt}  loading='lazy' src={source} />
    </Zoom>
  );
}
export default Image;
