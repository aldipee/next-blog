import React from 'react';
import Navbar from '../components/Navbar';
import PopularPost from '../components/PopularPost/PopularPost';
import ContentLayout from './../components/ContentLayout';
import { NextSeo } from 'next-seo';
import useRequest from '../libs/useRequest';

import fetcher from '../libs/fetcher';
import useSWR from 'swr';

const URL = 'https://dev.to/api/articles/me/published';

function Home({ initialData }) {
  const { data } = useSWR(URL, fetcher, { initialData });
  const pinnedData = data?.filter((item) => item.tag_list.includes('pinned'));

  return (
    <>
      <NextSeo title={`Pranata's Blog`} description={`Pranata's Blog`} />
      <Navbar.Menu />
      <div className='px-2 mx-auto max-w-7xl sm:px-4 lg:px-7'>
        <PopularPost data={pinnedData} />
        <ContentLayout data={data} />
      </div>
    </>
  );
}
// export async function getServerSideProps() {
//   const data = await fetcher(URL);
//   return { props: { initialData: data } };
// }

export async function getStaticProps() {
  // Get todo list from an API
  const initialData = await fetcher(URL);

  return {
    props: {
      initialData,
    },
  };
}
export default Home;
