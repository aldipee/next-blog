import React from 'react';

function ImageCaptions({ children }) {
  return <figcaption className='text-sm text-center mt-1 text-italic font-sans text'>{children}</figcaption>;
}
export default ImageCaptions;
