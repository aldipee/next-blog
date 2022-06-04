// import '../styles/globals.css'
// import 'tailwindcss/tailwind.css';
import "../styles/app.css";
import "../styles/custom.css";
import { useState } from "react";
import {QueryClient, QueryClientProvider} from "react-query";
// import "bootstrap/dist/css/bootstrap.css";



function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());
  return 	<QueryClientProvider client={queryClient}>
  <Component {...pageProps} />
</QueryClientProvider>
}

export default MyApp;
