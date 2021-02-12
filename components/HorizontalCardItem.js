import React from 'react';

const Navbar = ({ data, ...props }) => {
  const { cover_image, social_image, title, description } = data;
  return (
    <div className='mt-4 max-w-sm md:mx-1 w-full lg:flex'>
      <div
        className=' h-20  lg:h-auto lg:w-32 flex-none bg-cover bg-center bg-no-repeat  border-l border-t border-b rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden hidden sm:block'
        style={{ backgroundImage: `url(${social_image})` }}
        title='Woman holding a mug'
      ></div>
      <div className='border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal'>
        <div className=''>
          {/* <p className="text-sm text-grey font-body flex items-center">Members only</p> */}
          <div className='text-black font-bold text-md mb-2 font-titleHome line-clamp-2'>{title}</div>
          <p className='text-grey-darker font-body text-sm'>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
