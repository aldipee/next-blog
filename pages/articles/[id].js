import React from 'react';
import ReactMarkdown from 'markdown-to-jsx';
import Toc from 'react-toc';
import fetcher from '../../libs/fetcher';
import ArticleHeader from '../../components/ArticleHeader';
import Code from '../../components/Code/index';
import Image from '../../components/Image';
import Footer from '../../components/Footer/index';
import { UnorderList, List } from '../../components/List';
import BlockQuote from '../../components/BlockQuotes';
import { NextSeo } from 'next-seo';

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
      <div className='max-w-4xl mx-auto px-6 pt-8  mt-14 lg:px-7'>
        <NextSeo title={article.title} description={article.description} />
        <Toc markdownText={article.body_markdown} />
        <ReactMarkdown
          options={{
            overrides,
          }}
        >
          {article.body_markdown}
        </ReactMarkdown>
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
