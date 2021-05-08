import React from 'react';
import Navbar from '../components/Navbar';
import PopularPost from '../components/PopularPost/PopularPost';
import ContentLayout from './../components/ContentLayout';
import useRequest from '../libs/useRequest';

import fetcher from '../libs/fetcher';
import useSWR from 'swr';

const URL = 'https://dev.to/api/articles/me/published';

function Home({ initialData }) {
  const { data } = useSWR(URL, fetcher, { initialData });
  return (
    <>
      <Navbar.Menu />
      <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-7'>
        <PopularPost />
        <ContentLayout data={data} />
      </div>
    </>
  );
}
export async function getServerSideProps() {
  const data = await fetcher(URL);
  return { props: { initialData: data } };
}
export default Home;
