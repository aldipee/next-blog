import React from 'react';
import Navbar from '../components/Navbar/index';
function ArticleHeader({ data, ...props }) {
  const { title, cover_image, readable_publish_date } = data;
  return (
    <>
      <Navbar.Menu />
      <div className='max-w-6xl mx-auto lg:px-7 '>
        <div className='ml-4 lg:flex'>
          <div className='lg:w-5/12 lg:h-2/5'>
            <div className='lg:absolute lg:top-2/4'>
              <h3 className='font-titleHomeMedium px-2 text-xl text-gray-400'>{readable_publish_date}, 2021</h3>
              <h1 className=' font-titleHome  w-7/12 text-primaryBlue text-2xl lg:text-6xl leading-normal'>
                <span className='bg-white '>{title}</span>
              </h1>
              <p className='flex items-center lg:mt-7 z-1  font-titleHomeMedium text-gray-600 text-xl  font-bold'>
                <img
                  src='https://i.pinimg.com/originals/0e/a9/dd/0ea9dd7c7bd0251bbbb930020b1dce1f.jpg'
                  alt=''
                  className='w-20 h-20  rounded-full mr-4 bg-gray-100'
                />
                Aldi Pranata
              </p>
            </div>
          </div>
          <div className='lg:w-10/12 lg:h-2/4  '>
            <img
              src={
                cover_image
                  ? cover_image
                  : 'https://tailwindcss.com/_next/static/media/beach-house.dc0f86781422bcb8f89e64d49cd7adf6.jpg'
              }
              alt={title}
              className='object-cover bg-gray-100 w-screen h-screen'
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleHeader;
