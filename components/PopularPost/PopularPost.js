import React from 'react';
import HorizontalCardItem from '../HorizontalCardItem';
import DATA from '../../data/articles.json';

function PopularPosts(props) {
  const { data } = props;
  return (
    <div className='border-b pb-7'>
      <div>
        <h3 className='text-lg tracking-widest uppercase font-titleHome'>
          <span className='flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='27'
              height='27'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              stroke-linecap='round'
              stroke-linejoin='round'
              className='mr-3'
            >
              <polyline points='23 6 13.5 15.5 8.5 10.5 1 18'></polyline>
              <polyline points='17 6 23 6 23 12'></polyline>
            </svg>
            Popular Posts
          </span>
        </h3>
      </div>
      <div className='justify-between mt-2 lg:flex sm:flex-wrap'>
        {data?.map((item, index) => (
          <HorizontalCardItem data={item} key={`${item.id}-${index}`} />
        ))}
      </div>
    </div>
  );
}

export default PopularPosts;
