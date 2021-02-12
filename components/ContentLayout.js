import React from 'react';
import ItemHorizontalPost from './ItemHorizontalPost';
import CardLayout from './CardLayout';

const Navbar = ({ data, ...props }) => {
  const renderPost = (posts) => {
    return (
      !!posts.length &&
      posts.map((itemPost, index) => {
        return <ItemHorizontalPost data={itemPost} key={itemPost.id} />;
      })
    );
  };

  return (
    <div className='bg-white'>
      <div className='py-8'>
        <div className='flex justify-between container mx-auto'>
          <div className='w-full lg:w-8/12 '>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold text-gray-700 md:text-2xl'>Amazing Article</h1>
            </div>
            {renderPost(data)}
          </div>
          <div className='-mx-8 w-4/12 hidden lg:block'>
            <div className='sticky top-8 self-start'>
              <CardLayout />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
