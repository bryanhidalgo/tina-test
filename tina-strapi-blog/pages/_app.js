import "../styles/index.css";

import {
  StrapiMediaStore,
  StrapiProvider,
  StrapiClient,
} from "react-tinacms-strapi";
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
