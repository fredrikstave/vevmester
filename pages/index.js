import Head from 'next/head';
import withErrorBoundary from '../src/hocs/with-error-boundary';
import Menu from '../src/components/Menu';
import styles from './styles/index.scss';

function throwError() {
  throw new Error('What the hell just happened!');
}

function Main() {
  return [
    <Head key="main-head">
      <title>Vevmester</title>
      <meta name="description" content="Showcase website" />
    </Head>,
    <main key="main-content">
      <Menu />
      <div className={styles.landingPage}>
        <strong>Vevmester</strong>
      </div>
    </main>,
  ];
}

export default withErrorBoundary(Main);
