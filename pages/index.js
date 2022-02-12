import React from "react";
import Navbar from "../components/Navbar";
import PopularPost from "../components/PopularPost/PopularPost";
import ContentLayout from "./../components/ContentLayout";
import { SidebarRecommendations } from "../components/Sidebar";
import { NextSeo, BlogJsonLd } from "next-seo";
import useRequest from "../libs/useRequest";

import fetcher from "../libs/fetcher";
import useSWR from "swr";

const URL = "https://dev.to/api/articles/me/published";

function Home({ initialData }) {
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
                  " You know you're in love when you can't fall asleep because reality is finally better than your
                  dreams. "
                </h2>
                <h4 class="mb-5">- Dr. Seus</h4>
                {/* <a href="./article.html" class="btn btn-dark btn-outline-dark ">
                  More quotes
                </a> */}
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
