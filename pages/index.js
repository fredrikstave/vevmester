import Head from 'next/head';
import MainMenu from '../src/components/MainMenu';
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
        <MainMenu />
      </div>
    </main>,
  ];
}

export default Main;
