import React from 'react';
import Link from 'next/link';

const ItemHorizontalPost = ({ data, ...props }) => {
  const { readable_publish_date, tag_list, title, description, cover_image, user, social_image } = data;
  return (
    <div className='mt-3 lg:mt-6'>
      <div className='lg:max-w-4xl border-b '>
        <div className='pb-3 flex justify-between'>
          <div className='w-52 lg:w-7/12 lg:pt-2'>
            <div className='flex justify-between items-center'>
              <a href='#' className='pr-1 py-0.5  text-xs lg:text-md text-gray-300 font-bold border-b capitalize'>
                in {tag_list[0]}
              </a>
            </div>
            <div className='lg:mt-2'>
              <Link href={`/articles/${data.slug}-${data.id}`}>
                <a className='text-md lg:text-2xl text-black font-titleHome line-clamp-2 lg:line-clamp-3 '>{title}</a>
              </Link>
              <p className='lg:mt-2 hidden sm:block lg:text-lg text-black font-body'>{description}</p>
            </div>
            <div className='flex justify-between items-star lg:items-center  mt-1 lg:mt-4'>
              <div className='font-light text-gray-600 flex lg:items-center justify-around'>
                <p className='mr-1  sm:mt-1 lg:mt-0 text-xs lg:text-md '>{readable_publish_date}</p>
                <div className='text-xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='10'
                    height='20'
                    viewBox='0 0 100 100'
                    fill='#dedede'
                    stroke='#dedede'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <ellipse cx='20' cy='20' rx='20' ry='20'></ellipse>
                  </svg>
                </div>
                <p className='sm:mt-1 lg:mt-0 text-xs lg:text-md'>3 menit</p>
              </div>
              <div>
                <a href='#' className='flex text-gray-600 items-center'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='22'
                    height='22'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='1'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-bookmark'
                  >
                    <path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div
            className='rounded-md h-24 w-28 lg:h-auto  lg:w-80 flex bg-cover text-center overflow-hidden'
            style={{ backgroundImage: `url(${cover_image ? cover_image : social_image})` }}
            title={title}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ItemHorizontalPost;
