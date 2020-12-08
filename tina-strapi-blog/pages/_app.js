import "../styles/index.css";

// import {
//   StrapiMediaStore,
//   StrapiProvider,
//   StrapiClient,
// } from "react-tinacms-strapi";
// import { TinaCMS, TinaProvider } from "tinacms";
// import { useCMS } from "@tinacms/react-core";
// import { useMemo } from "react";

// export const EditButton = () => {
//   const cms = useCMS();
//   return (
//     <button onClick={() => (cms.enabled ? cms.disable() : cms.enable())}>
//       {cms.enabled ? `Stop Editing ` : `Edit this Site `}
//     </button>
//   );
// };

// const enterEditMode = () => {
//   return fetch(`/api/preview`).then(() => {
//     window.location.href = window.location.pathname;
//   });
// };

// const exitEditMode = () => {
//   return fetch(`/api/reset-preview`).then(() => {
//     window.location.reload();
//   });
// };

export default function MyApp({ Component, pageProps }) {
  // const cms = useMemo(
  //   () =>
  //     new TinaCMS({
  //       toolbar: pageProps.preview,
  //       enabled: pageProps.preview,
  //       apis: {
  //         strapi: new StrapiClient(process.env.STRAPI_URL),
  //       },
  //       media: new StrapiMediaStore(process.env.STRAPI_URL),
  //     }),
  //   []
  // );
  console.log("My Strap is", process.env.NEXT_PUBLIC_STRAPI_URL);
  return (
    <>
      {/* <StrapiProvider>
        <EditButton /> */}
      <Component {...pageProps} />
      {/* </StrapiProvider> */}
    </>
  );
}
