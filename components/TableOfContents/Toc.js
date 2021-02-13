import React from "react";

const TableOfContents = ({ body }) => {
  return (
    <div className="sticky self-start top-8">
      <h4 className="pb-2 mb-5 text-xl border-b border-gray-300 font-titleHomeMedium">Contents</h4>
      <ul>
        {body &&
          body.map((headings) => (
            <li className={`${headings.depth > 2 ? "pl-4" : ""} mb-3 text-sm text-gray-500  hover:text-primaryBlue`}>
              <a href={`#${headings.id}`}>{headings.title}</a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
