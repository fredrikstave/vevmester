import Head from 'next/head';
import Link from 'next/link';
import GhostContentAPI from "@tryghost/content-api";
import LeftMenu from '../src/components/LeftMenu';
import styles from './styles/index.scss';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://178.128.163.168',
  key: 'b7bae9e9908a830d6669e65c14',
  version: "v3"
});

function Main({ posts = [] }) {
  return [
    <Head key="main-head">
      <title>Vevmester</title>
      <meta name="description" content="Showcase website" />
    </Head>,
    <main key="main-content">
      <LeftMenu />
      <div className={styles.listContainer}>
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              <Link href={`/artikler/[slug]`} as={`/artikler/${post.slug}`}>
                <a>{post.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>,
  ];
}

Main.getInitialProps = async ({ query, res }) => {
  const posts = await api.posts
    .browse({
      limit: "all"
    })
    .catch(err => {
      console.error(err);
    });

  return { posts };
}

export default Main;
