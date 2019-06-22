import withErrorBoundary from '../src/hocs/with-error-boundary';
import styles from './styles/index.scss';

function throwError() {
  throw new Error('What the hell just happened!');
}

function Main() {
  return (
    <div className={styles.landingPage}>
      <strong>Vevmester</strong>
    </div>
  );
}

export default withErrorBoundary(Main);
