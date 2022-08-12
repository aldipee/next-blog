// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css';
import '../styles/app.css';
import '../styles/custom.css';
import { useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { useRouter } from 'next/router';
import Script from 'next/script';
// import "bootstrap/dist/css/bootstrap.css";

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag && process.env.NODE_ENV === 'production') {
      window.gtag('config', 'G-JYJH5415FZ', {
        page_path: router.asPath,
      });
    }
  }, [router.asPath]);
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=G-JYJH5415FZ`} strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
					window.dataLayer = window.dataLayer || [];
					function gtag(){window.dataLayer.push(arguments);}
					gtag('js', new Date());

					gtag('config', 'G-JYJH5415FZ');
        		`}
      </Script>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default MyApp;
