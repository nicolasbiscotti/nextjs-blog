import Head from "next/head";
import Date from "../../components/date";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getPostData(params);
  return { props: { post } };
}

export default function SingularPost({ post }) {
  return (
    <Layout>
      <Head>
        <title> {post.title} </title>
      </Head>
      <article>
        <h1 className={utilStyles.hedingXl}> {post.title} </h1>
        <div className={utilStyles.lightText}>
          <Date dateString={post.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
      </article>
    </Layout>
  );
}
