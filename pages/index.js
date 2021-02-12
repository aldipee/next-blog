import React from 'react';
import Navbar from '../components/Navbar';
import PopularPost from '../components/PopularPost/PopularPost';
import ContentLayout from './../components/ContentLayout';
import useRequest from '../libs/useRequest';

import fetcher from '../libs/fetcher';
import useSWR from 'swr';

const URL = 'https://dev.to/api/articles';

function Home({ initialData }) {
  const { data } = useSWR(URL, fetcher, { initialData });
  return (
    <>
      <Navbar.Menu />
      <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-7'>
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
