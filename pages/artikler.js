import Head from 'next/head';
import Link from 'next/link';
import { GithubIcon } from '../src/components/SvgIcon';
import styles from './styles/artikler.scss';

export default function Artikler() {
  return [
    <Head key="main-head">
      <title>Artikler - Vevmester</title>
    </Head>,
    <main key="main-content">
      <div className={styles.menu}>
        <Link href="/artikler">
          <a className={styles.menuItem}>
            <span className={styles.menuText}>Artikler</span>
          </a>
        </Link>
        <Link href="/guider">
          <a className={styles.menuItem}>
            <span className={styles.menuText}>Guider</span>
          </a>
        </Link>
        <Link href="https://github.com/fredrikstave">
          <a className={styles.menuItem}>
            <span className={styles.menuText}>Github</span>
            <GithubIcon className={styles.ghIcon} />
          </a>
        </Link>
      </div>
      <div className={styles.landingPage}>
        <strong>Vevmester</strong>
      </div>
    </main>,
  ];
}
