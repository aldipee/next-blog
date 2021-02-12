import React from 'react';

import Toc from 'react-toc';

const TableOfContents = ({ bodyMarkDown }) => {
  return (
    <div>
      <Toc markdownText={bodyMarkDown} />
    </div>
  );
};

export default TableOfContents;
