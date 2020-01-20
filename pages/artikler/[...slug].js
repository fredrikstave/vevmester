import { useRouter } from 'next/router';
import Head from 'next/head';
import GhostContentAPI from "@tryghost/content-api";
import LeftMenu from '../../src/components/LeftMenu';
import styles from './styles.scss';

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: 'http://178.128.163.168',
  key: 'b7bae9e9908a830d6669e65c14',
  version: "v3"
});

function Main(props) {
  const router = useRouter()
  const { slug } = router.query;

  return [
    <Head key="main-head">
      <title>{props.title} | Vevmester</title>
      <meta name="description" content={props.excerpt} />
    </Head>,
    <main key="main-content" className={styles.wrapper}>
      <LeftMenu />
      <div className={styles.articleContainer}>
        <article className={styles.article}>
          <h1 className={styles.title}>{props.title}</h1>
          <strong className={styles.lead}>{props.excerpt}</strong>
          <em className={styles.byline}>Av {props.primary_author.name}</em>
          <div dangerouslySetInnerHTML={{ __html: props.html}} />
        </article>
      </div>
    </main>,
  ];
}

Main.getInitialProps = async ({ query, res }) => {
  const response = await api.posts
    .read({ slug: query.slug, include: ['authors'] })
    .catch(err => {
      res.statusCode = 404;
      return {
        err: {
          statusCode: 404,
        },
      };
    });

  return response;
}

export default Main;
