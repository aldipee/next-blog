import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import fetcher from '../../libs/fetcher';
import ArticleHeader from '../../components/ArticleHeader';
import Code from '../../components/Code/index';
import Image from '../../components/Image';
import Footer from '../../components/Footer/index';
import TableOfContents from '../../components/TableOfContents';
import { UnorderList, List } from '../../components/List';
import BlockQuote from '../../components/BlockQuotes';
import { VerticalShareButton } from '../../components/ShareButton/index';
import { generateLinkMarkup, initializeTOC, handleLinkClick } from '../../libs/content';

const getURL = (id) => `https://dev.to/api/articles/${id}`;

function Home({ article, articleId }) {
  const [data, setData] = React.useState('');
  const [aside, setAside] = React.useState('');

  React.useEffect(() => {
    const $mainArticle = document.querySelector('#main-article');
    const $aside = document.querySelector('aside');
    setData(generateLinkMarkup(document.querySelector('#main-article')));
    setAside($aside);
    const $links = [...$aside.querySelectorAll('a')];
    const $headings = [...$mainArticle.querySelectorAll('h2, h3')];
    const motionQuery = window.matchMedia('(prefers-reduced-motion)');
    $links.map((link) => {
      link.addEventListener('click', (evt) => handleLinkClick(evt, $headings, motionQuery));
    });
    initializeTOC($mainArticle, $aside);
  }, []);
  console.log(data, 'TOC');
  const Pre = ({ children, ...props }) => <Code.Pre code={children.props.children} />;
  const Prism = ({ children, ...props }) => <Code.Prism code={children} />;
  const ImageCaptions = ({ children, ...props }) => <Image.ImageCaptions>{children}</Image.ImageCaptions>;
  const ImageZoom = ({ alt, src, ...props }) => {
    console.log(src);
    return <Image.Image  source={src} alt={alt} />;
  };

  const overrides = {
    p: {
      props: {
        className: 'dropcaps font-body text-xl lg:text-1xl mt-2 mb-4 lg:mt-6 lg:mb-6 lg:leading-normal ',
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
        className: 'mt-4 mb-6',
      },
    },
    h2: {
      props: {
        className: 'text-xl lg:text-3xl font-titleHome mt-6 mb-3 lg:mb-6 lg:mt-12',
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
      <Head>
        <link rel="dns-prefetch" href={`https://dev.to/api/articles/698914`} as="fetch" crossorigin="anonymous" />
      </Head>
      <ArticleHeader data={article} />
     
      <div className='px-6 pt-8 bg-white'>
      
        <NextSeo title={article.title} description={article.description} />
        {/* <div className='fixed top-0 left-0 w-1/2 h-full' aria-hidden='true'></div>
        <div className='fixed top-0 right-0 w-1/2 h-full ' aria-hidden='true'></div> */}
        <div className='relative min-h-screen bg-white flex flex-col'>
          {/* 3 column wrapper */}

          <div className='flex-grow w-full max-w-7xl mx-auto  lg:flex'>
            {/* Left sidebar & main wrapper */}
            <div className='flex-1 min-w-0 bg-red xl:flex'>
              <div className=' xl:flex-shrink-0 xl:w-48  bg-white'>
                <div className='h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
                  {/* Start left column area */}
                  <div className='h-full relative column-style' style={{ minHeight: '3rem' }}></div>
                  {/* End left column area */}
                </div>
              </div>

              <div className='bg-red lg:min-w-0 lg:flex-1'>
                <div className='h-full py-6  sm:px-6 lg:px-20'>
                
                  {/* Start main area */}
                  <div id='main-article' className='relative h-full' style={{ minHeight: '20rem' }}>
                  
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

            <div className='hidden lg:block bg-white pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 xl:pr-0'>
              <div className='h-full pl-6 py-6 lg:w-60'>
                {/* Start right column area */}
                <div className='h-full relative ' style={{ minHeight: '16rem' }}>
                  <TableOfContents body={data} />
                 
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
  const data = await fetcher(getURL(query.id.slice(-6)));
  console.log({ article: data, articleId: query.id });
  return { props: { article: data, articleId: query.id } };
}
