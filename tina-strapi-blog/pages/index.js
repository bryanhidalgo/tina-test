import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";

import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { fetchGraphql } from "react-tinacms-strapi";

//...

export default function Index() {
  // const heroPost = allPosts[0];
  // const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with </title>
        </Head>
      </Layout>
    </>
  );
}
