import React from "react";

const Navbar = ({ data, ...props }) => {
  const { cover_image, social_image, title, description } = data;
  return (
    <div className="w-full max-w-sm mt-4 md:mx-1 lg:flex">
      <div
        className="flex-none hidden h-20 overflow-hidden text-center bg-center bg-no-repeat bg-cover border-t border-b border-l rounded-t lg:h-auto lg:w-32 lg:rounded-t-none lg:rounded-l sm:block"
        style={{ backgroundImage: `url(${social_image})` }}
        title="Woman holding a mug"
      ></div>
      <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r rounded-b border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light lg:rounded-b-none lg:rounded-r">
        <div className="">
          {/* <p className="flex items-center text-sm text-grey font-body">Members only</p> */}
          <div className="mb-2 font-bold text-black text-md font-titleHome line-clamp-2">{title}</div>
          <p className="text-sm text-grey-darker font-body">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
