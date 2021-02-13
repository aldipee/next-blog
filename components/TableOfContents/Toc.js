import React from "react";

const TableOfContents = ({ body }) => {
  return (
    <aside className="sticky self-start top-8 ">
      {/* <h4 className='pb-2 mb-5 text-xl font-titleHomeMedium'>Contents</h4> */}
      <ul className="px-4 border-l border-gray-300">
        {body &&
          body.map((headings) => (
            <li className={`${headings.depth > 2 ? "pl-4" : ""} mb-3 text-xs text-gray-500  hover:text-primaryBlue`}>
              <a href={`#${headings.id}`}>{headings.title}</a>
            </li>
          ))}
      </ul>
    </aside>
  );
};

export default TableOfContents;
