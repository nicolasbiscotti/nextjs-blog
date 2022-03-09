import Head from "next/head";
import Layout from "../../components/layout";
import { getPostData } from "../../lib/posts";

export async function getServerSideProps(context) {
  const post = await getPostData({ id: context.query.id });
  return { props: { post } };
}

export default function Post({ post }) {
  return (
    <Layout>
      <Head>
        <title> {post.id} </title>
      </Head>
      <h1> {post.title} </h1>
      <h3> {post.date} </h3>
      <p> {post.contentHtml} </p>
    </Layout>
  );
}
