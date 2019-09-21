import Head from 'next/head';
import Menu from '../src/components/Menu';
import styles from './styles/index.scss';

function Main() {
  return [
    <Head key="main-head">
      <title>Vevmester</title>
      <meta name="description" content="Showcase website" />
    </Head>,
    <main key="main-content">
      <div className={styles.landingPage}>
        <strong>Vevmester</strong>
      </div>
    </main>,
  ];
}

export default Main;
