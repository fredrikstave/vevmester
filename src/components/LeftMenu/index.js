import Link from 'next/link';
import classnames from 'classnames';
import { useRouter } from 'next/router';
import styles from './index.scss';
import { GithubIcon, MenuIcon } from '../SvgIcon';

const MainMenu = (props) => {
  const { asPath } = useRouter();
  return (
    <div className={styles.leftMenu}>
      <Link href="/">
        <a className={styles.title}>Vevmester</a>
      </Link>
      <div className={styles.menuItems}>
        <Link href="/artikler">
          <a className={classnames(
            styles.menuItem,
            asPath === '/artikler' && styles.menuItemActive
          )}>
            <span className={styles.menuText}>Blogg</span>
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/fredrik-stave">
          <a target="_blank" className={styles.menuItem}>
            <span className={styles.menuText}>LinkedIn</span>
          </a>
        </Link>
        <Link href="https://github.com/fredrikstave">
          <a target="_blank" className={styles.menuItem}>
            <span className={styles.menuText}>Github</span>
            <GithubIcon className={styles.ghIcon} />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default MainMenu;
