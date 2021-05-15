import React from 'react';
import Link from 'next/link';

const ItemHorizontalPost = ({ data, ...props }) => {
  const { readable_publish_date, tag_list, title, description, cover_image, user, social_image } = data;
  return (
    <div className='mt-3 lg:mt-6'>
      <div className='border-b lg:max-w-4xl '>
        <div className='flex justify-between pb-3'>
          <div className='w-52 lg:w-7/12 lg:pt-2'>
            <div className='flex items-center justify-between'>
              <a href='#' className='pr-1 py-0.5  text-xs lg:text-md text-gray-300 font-bold border-b capitalize'>
                in {tag_list[0]}
              </a>
            </div>
            <div className='lg:mt-2'>
              <Link href={`/articles/${data.slug}-${data.id}`}>
                <a className='text-black text-md lg:text-2xl font-titleHome line-clamp-2 lg:line-clamp-3 '>{title}</a>
              </Link>
              <p className='hidden text-black lg:mt-2 sm:block lg:text-lg font-body'>{description}</p>
            </div>
            <div className='flex justify-between mt-1 items-star lg:items-center lg:mt-4'>
              <div className='flex justify-around font-light text-gray-600 lg:items-center'>
                <p className='mr-1 text-xs sm:mt-1 lg:mt-0 lg:text-md '>{readable_publish_date}</p>
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
                {/* <p className='text-xs sm:mt-1 lg:mt-0 lg:text-md'>3 menit</p> */}
              </div>
              <div>
                <a href='#' className='flex items-center text-gray-600'>
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
            className='flex h-24 overflow-hidden text-center bg-cover rounded-md w-28 lg:h-auto lg:w-80'
            style={{ backgroundImage: `url(${cover_image ? cover_image : social_image})` }}
            title={title}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ItemHorizontalPost;
