import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import styles from "../styles/home.module.css";
import Head from "next/head";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();

  return {
    props: { allPostsData },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.container}>
        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {allPostsData.map(({ id, title, date }) => (
            <Link key={id} href={`/posts/${id}`}>
              <a className={styles.card}>
                <h3>{title}</h3>
                <p>{date}</p>
              </a>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
