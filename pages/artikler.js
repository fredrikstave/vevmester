import Head from 'next/head';
import styles from './styles/artikler.scss';

function Main() {
  return [
    <Head key="main-head">
      <title>Vevmester</title>
      <meta name="description" content="Showcase website" />
    </Head>,
    <main key="main-content">
    </main>,
  ];
}

export default Main;
