import { useState } from 'react';
import Link from 'next/link';
import { GithubIcon, MenuIcon } from '../SvgIcon';
import styles from './index.scss';

export default function Menu() {
  const [ state, setState ] = useState({ isOpen: false });

  if (state.isOpen) {
    return (
      <div className={styles.menu}>
        <button onClick={() => setState({ isOpen: false })} className={styles.openMenuButtonBlack}>
          <span className={styles.buttonText}>LUKK</span>
          <MenuIcon className={styles.buttonIcon} />
        </button>
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
    );
  }

  return (
    <button onClick={() => setState({ isOpen: true })} className={styles.openMenuButton}>
      <span className={styles.buttonText}>MENY</span>
      <MenuIcon className={styles.buttonIcon} />
    </button>
  );
}