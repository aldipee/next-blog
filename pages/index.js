import React from "react";
import Navbar from "../components/Navbar";
import PopularPost from "../components/PopularPost/PopularPost";
import ContentLayout from "./../components/ContentLayout";
import { SidebarRecommendations } from "../components/Sidebar";
import { NextSeo, BlogJsonLd } from "next-seo";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

import useRequest from "../libs/useRequest";
import {useQuote} from './../hooks'

import fetcher from "../libs/fetcher";
import useSWR from "swr";

const URL = "https://dev.to/api/articles/me/published";

function Home({ initialData }) {
  const { quote, error, isLoading: quoteLoading, isFetching, status,refetch, isPreviousData} = useQuote()
  console.log(quote, error,'quote')
  const { data } = useSWR(URL, fetcher, { initialData });
  const pinnedData = data?.filter((item) => item.tag_list.includes("pinned"));
  const recommendationsData = data?.filter((item) => item.tag_list.includes("recommendation"));
  return (
    <>
      <NextSeo title={`Pranata's Blog`} description={`Pranata's Blog`} />
      <BlogJsonLd
        url="https://aldipee.com"
        title="Pranata's Blog"
        authorName="Aldi Pranata"
        description="Pranata's Blog."
      />
      <Navbar.Menu />
      <PopularPost data={pinnedData} />

 <div class="container">
 <div style={{ backgroundColor: "#fafafa" }} class="jumbotron jumbotron-fluid mb-3 pt-0 pb-0 position-relative">
   <div class="pl-4 pr-0 h-100 tofront">
     <div class="row justify-content-between">
       <div class="col-md-12 pt-6 pb-6 align-self-center">
         <h2 class="secondfont mb-3 font-weight-bold">
           {status === 'loading'? <Skeleton /> :`" ${quote.data.quote} "` }
           
         </h2>
         <h4 class="mb-5">{status === 'loading'? <Skeleton /> :`- ${quote.data.author}` }</h4>
         {status !== 'loading' && (
          <button onClick={() => !isFetching && refetch()} class="btn btn-dark btn-outline-dark ">
          Show me more, please
         </button>
         )}
       </div>
     </div>
   </div>
 </div>
</div>


     
      <div className="container">
        <div className="row justify-content-between">
          <ContentLayout data={data} />
          <SidebarRecommendations data={recommendationsData} />
        </div>
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
    revalidate: 1,
  };
}
export default Home;
