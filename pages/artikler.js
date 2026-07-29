import Head from 'next/head';
import Link from 'next/link';
import LeftMenu from '../src/components/LeftMenu';
import styles from './styles/index.scss';

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
          <li>
            <Link href={`/artikler/[slug]`} as="/artikler/dette-er-en-test">
              <a>Dette er en test</a>
            </Link>
          </li>
        </ul>
      </div>
    </main>,
  ];
}

export default Main;
