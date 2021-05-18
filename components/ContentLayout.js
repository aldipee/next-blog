import React from 'react';
import ItemHorizontalPost from './ItemHorizontalPost';
import CardLayout from './CardLayout';
import { SidebarQuote, SidebarRecommendations } from './Sidebar';

const Navbar = ({ data, ...props }) => {
  const recommendationsData = data?.filter((item) => item.tag_list.includes('recommendation'));
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
        <div className='container flex justify-between mx-auto'>
          <div className='w-full lg:w-8/12 '>
            <div className='flex items-center justify-between'>
              <h1 className='text-xl font-bold text-gray-700 md:text-2xl uppercase'>Recently Published</h1>
            </div>
            {renderPost(data)}
          </div>
          <div className='hidden w-4/12 -mx-8 lg:block'>
            <div className='sticky self-start top-8'>
              <SidebarQuote />
              <SidebarRecommendations data={recommendationsData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
