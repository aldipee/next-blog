import React from "react";

import Toc from "react-toc";

const TableOfContents = ({ bodyMarkDown }) => {
  return (
    <div className="sticky top-8 self-start">
      <h4 className="mb-5 pb-2 text-xl font-titleHomeMedium border-gray-300 border-b">Table of contents</h4>
      <Toc markdownText={bodyMarkDown} titleLimit={25} lowestHeadingLevel={5} className="toc" />
    </div>
  );
};

export default TableOfContents;
