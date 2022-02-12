import React from "react";

const TableOfContents = ({ body }) => {
  return (
    <aside id="toc-container" className="sticky">
      {/* <h4 className='pb-2 mb-5 text-xl font-titleHomeMedium'>Contents</h4> */}
      <ul id="toc" className="px-4 list-group-item">
        {body &&
          body.map((headings, index) => (
            <li
              key={`keysome-${headings.id}-${index}`}
              className={`${
                headings.depth > 2 ? "list-group-item list-group-item-toc pl-4" : "list-group-item list-group-item-toc"
              } `}
            >
              <a href={`#${headings.id}`}>{headings.title}</a>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
