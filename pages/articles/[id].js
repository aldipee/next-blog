import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import Head from 'next/head';
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
    return <Image.Image source={src} alt={alt} />;
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
      <ArticleJsonLd
        url={`https://aldipee.com/articles/${article?.slug}-${article?.id}`}
        title={article?.title}
        images={[article?.cover_image]}
        datePublished={article?.published_timestamp}
        dateModified={article?.edited_at}
        authorName={['Aldi Pranata', 'aldipee']}
        publisherName='Aldi Pranata'
        publisherLogo='https://firebasestorage.googleapis.com/v0/b/principal-my.appspot.com/o/blog-logo.svg?alt=media&token=6427d288-e054-4376-9386-f5f483f9978f'
        description={article?.description}
      />
      <ArticleHeader data={article} />

      <div className='px-6 pt-8 bg-white'>
        <NextSeo
          title={article?.title}
          description={article?.description}
          openGraph={{
            title: article?.title,
            description: article?.description,
            url: `https://aldipee.com/articles/${article?.slug}-${article?.id}`,
            type: 'article',
            article: {
              publishedTime: article?.published_timestamp,
              modifiedTime: article?.edited_at,
              section: article?.tags?.[0],
              authors: ['Aldi Pranata', 'aldipee'],
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
                    {article?.body_markdown && (
                      <ReactMarkdown
                        options={{
                          overrides,
                        }}
                      >
                        {article?.body_markdown}
                      </ReactMarkdown>
                    )}
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

// This function gets called at build time
export async function getStaticPaths() {
  const URL = 'https://dev.to/api/articles/me/published';

  // Call an external API endpoint to get posts
  const res = await fetch(URL, {
    headers: {
      'api-key': 'N9FgggExkv9KrTWcyidGNVCz',
    },
  });
  const posts = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = posts.map((post) => ({
    params: { id: `${post.slug}-${post.id}` },
  }));
  console.log(paths, 'INI_PATHS');

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  console.log(params, 'INO_PARAMS');
  const id = params.id.slice(-6);
  const res = await fetch(getURL(id));
  const data = await res.json();

  // Pass post data to the page via props
  return { props: { article: data, articleId: id }, revalidate: 1 };
}

export default Home;
