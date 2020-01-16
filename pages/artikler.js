import Head from 'next/head';
import LeftMenu from '../src/components/LeftMenu';

function Main() {
  return [
    <Head key="main-head">
      <title>Vevmester</title>
      <meta name="description" content="Showcase website" />
    </Head>,
    <main key="main-content">
      <LeftMenu />
    </main>,
  ];
}

export default Main;
