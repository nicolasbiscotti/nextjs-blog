import Head from "next/head";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = getPostData(params);
  return { props: { post } };
}

export default function SingularPost({ post }) {
  return (
    <Layout>
      <Head>
        <title> {post.id} </title>
      </Head>
      <h1> {post.title} </h1>
      <h3> {post.date} </h3>
      <p> {post.content} </p>
    </Layout>
  );
}
