import Link from 'next/link';
import styles from './index.scss';
import { GithubIcon, MenuIcon } from '../SvgIcon';

const MainMenu = (props) => {
  return (
    <div className={styles.menuItems}>
      <Link href="/artikler">
        <a className={styles.menuItem}>
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
  );
}

export default MainMenu;
