import React from "react";
import ReactMarkdown from "markdown-to-jsx";
import { NextSeo, ArticleJsonLd } from "next-seo";
import Head from "next/head";
import fetcher from "../../libs/fetcher";
import ArticleHeader from "../../components/ArticleHeader";
import Code from "../../components/Code/index";
import Image from "../../components/Image";
import Footer from "../../components/Footer/index";
import TableOfContents from "../../components/TableOfContents";
import { UnorderList, List } from "../../components/List";
import BlockQuote from "../../components/BlockQuotes";
import PopularPost from "../../components/PopularPost/PopularPost";
import { VerticalShareButton } from "../../components/ShareButton/index";
import { generateLinkMarkup, initializeTOC, handleLinkClick } from "../../libs/content";

const getURL = (id) => `https://dev.to/api/articles/${id}`;

function Home({ article, articleId }) {
  const [data, setData] = React.useState("");
  const [aside, setAside] = React.useState("");

  React.useEffect(() => {
    const $mainArticle = document.querySelector("#main-article");
    const $aside = document.querySelector("aside");
    setData(generateLinkMarkup(document.querySelector("#main-article")));
    setAside($aside);
    console.log($aside, "$aside");
    const $links = [...$aside.querySelectorAll("a")];
    const $headings = [...$mainArticle.querySelectorAll("h2, h3")];
    const motionQuery = window.matchMedia("(prefers-reduced-motion)");
    $links.map((link) => {
      link.addEventListener("click", (evt) => handleLinkClick(evt, $headings, motionQuery));
    });
    initializeTOC($mainArticle, $aside);
  }, []);
  console.log(article, "TOC");
  const Pre = ({ children, ...props }) => <Code.Pre code={children.props.children} />;
  const Prism = ({ children, ...props }) => <Code.Prism code={children} />;
  const ImageCaptions = ({ children, ...props }) => <Image.ImageCaptions>{children}</Image.ImageCaptions>;
  const ImageZoom = ({ alt, src, ...props }) => {
    console.log(src);
    return <Image.Image source={src} alt={alt} />;
  };

  const overrides = {
    p: {
      props: {
        className: "",
      },
    },
    blockquote: {
      component: BlockQuote,
    },
    pre: { component: Pre },
    code: { component: Prism },
    img: { component: ImageZoom },
    figcaption: { component: ImageCaptions },
    li: {
      component: List,
    },
    ul: {
      component: UnorderList,
    },
    br: {
      props: {
        className: "mt-4 mb-6",
      },
    },
    h2: {
      props: {
        className: "h2-content mb-4 font-weight-bold",
      },
    },
    h3: {
      props: {
        className: "",
      },
    },
    h1: {
      props: {
        className: "",
      },
    },
  };
  return (
    <>
      <ArticleJsonLd
        url={`https://aldipee.com/articles/${article?.slug}-${article?.id}`}
        title={article?.title}
        images={[article?.cover_image]}
        datePublished={article?.published_timestamp}
        dateModified={article?.edited_at}
        authorName={["Aldi Pranata", "aldipee"]}
        publisherName="Aldi Pranata"
        publisherLogo="https://firebasestorage.googleapis.com/v0/b/principal-my.appspot.com/o/blog-logo.svg?alt=media&token=6427d288-e054-4376-9386-f5f483f9978f"
        description={article?.description}
      />
      <NextSeo
        title={article?.title}
        description={article?.description}
        openGraph={{
          title: article?.title,
          description: article?.description,
          url: `https://aldipee.com/articles/${article?.slug}-${article?.id}`,
          type: "article",
          article: {
            publishedTime: article?.published_timestamp,
            modifiedTime: article?.edited_at,
            section: article?.tags?.[0],
            authors: ["Aldi Pranata", "aldipee"],
            tags: article?.tags,
          },
          images: [
            {
              url: article?.cover_image,
              width: 850,
              height: 650,
              alt: article?.title,
            },
          ],
        }}
      />
      <ArticleHeader
        author={article?.user?.name}
        publishedDate={article?.readable_publish_date}
        category={article?.tags?.[0] || "Blog"}
        title={article?.title}
        readTimes={article?.reading_time_minutes}
        bannerImage={article?.cover_image}
      />

      <div className="pt-4 pb-4 container-fluid">
        <div id="main-article" className="row justify-content-center">
          <div className="col-md-10 col-lg-2"></div>
          <div className="col-md-12 col-lg-6">
            <article>
              {article?.body_markdown && (
                <ReactMarkdown
                  options={{
                    overrides,
                  }}
                >
                  {article?.body_markdown}
                </ReactMarkdown>
              )}
            </article>
          </div>
          <div class="col-lg-2  mb-4 col-md-12 d-none d-sm-block">
            <div class="sticky-top text-center">
              <TableOfContents body={data} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  const URL = "https://dev.to/api/articles/me/published";

  // Call an external API endpoint to get posts
  const res = await fetch(URL, {
    headers: {
      "api-key": "P4xgUukYr7fyWQnC8HFZS1mA",
    },
  });
  const posts = await res.json() || [];

  // Get the paths we want to pre-render based on posts
  const paths = posts?.map((post) => ({
    params: { id: `${post.slug}-${post.id}` },
  }));
  console.log('All Paths', paths);

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(params, "INO_PARAMS");
  const id = params.id.slice(-6);
  const res = await fetch(getURL(id));
  const data = await res.json();

  // Pass post data to the page via props
  return { props: { article: data, articleId: id }, revalidate: 1 };
}

export default Home;
