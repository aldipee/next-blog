import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { NextSeo } from 'next-seo';
import fetcher from '../../libs/fetcher';
import ArticleHeader from '../../components/ArticleHeader';
import Code from '../../components/Code/index';
import Image from '../../components/Image';
import Footer from '../../components/Footer/index';
import TableOfContents from '../../components/TableOfContents';
import { UnorderList, List } from '../../components/List';
import BlockQuote from '../../components/BlockQuotes';
const getURL = (id) => `https://dev.to/api/articles/${id}`;

function Home({ article, articleId }) {
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
        className: 'font-body text-base lg:text-xl mt-2 mb-4 lg:mt-6 lg:mb-5 leading-normal lg:leading-relaxed',
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
        className: 'mt-4',
      },
    },
    h2: {
      props: {
        className: 'text-2xl lg:text-3xl font-titleHome mt-6 mb-3 lg:mb-6 lg:mt-12',
      },
    },
    h3: {
      props: {
        className: 'text-xl font-bold lg:text-2xl font-titleHome mt-4 mb-3 lg:mb-6 lg:mt-12',
      },
    },
    h1: {
      props: {
        className: 'text-2xl lg:text-4xl font-titleHome mt-6 mb-3 lg:mb-6 lg:mt-12',
      },
    },
  };
  return (
    <>
      <ArticleHeader data={article} />
      <div className='px-6 pt-8 '>
        <NextSeo title={article.title} description={article.description} />
        <div class='fixed top-0 left-0 w-1/2 h-full' aria-hidden='true'></div>
        <div class='fixed top-0 right-0 w-1/2 h-full ' aria-hidden='true'></div>
        <div class='relative min-h-screen flex flex-col'>
          {/* 3 column wrapper */}

          <div class='flex-grow w-full max-w-7xl mx-auto  lg:flex'>
            {/* Left sidebar & main wrapper */}
            <div class='flex-1 min-w-0 bg-red xl:flex'>
              <div class=' xl:flex-shrink-0 xl:w-36  bg-white'>
                <div class='h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
                  {/* Start left column area */}
                  <div class='h-full relative' style={{ minHeight: '12rem' }}>
                    <TableOfContents bodyMarkDown={article.body_markdown} />
                  </div>
                  {/* End left column area */}
                </div>
              </div>

              <div class='bg-white lg:min-w-0 lg:flex-1'>
                <div class='h-full py-6 px-4 sm:px-6 lg:px-8'>
                  {/* Start main area */}
                  <div class='relative h-full' style={{ minHeight: '36rem' }}>
                    <ReactMarkdown
                      options={{
                        overrides,
                      }}
                    >
                      {article.body_markdown}
                    </ReactMarkdown>
                  </div>
                  {/* End main area */}
                </div>
              </div>
            </div>

            <div class=' pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0'>
              <div class='h-full pl-6 py-6 lg:w-36'>
                {/* Start right column area */}
                <div class='h-full relative' style={{ minHeight: '16rem' }}>
                  {/* <div class='absolute inset-0 border-4 border-gray-200 border-dashed rounded-lg'></div> */}
                </div>
                {/* End right column area */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;

export async function getServerSideProps({ query }) {
  const data = await fetcher(getURL(query.id));
  console.log({ initialData: data, article: query.id });
  return { props: { article: data, articleId: query.id } };
}
