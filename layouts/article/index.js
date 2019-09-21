import Head from 'next/head';
import styles from './index.scss';

export default function Article(frontMatter) {
  return ({ children }) => [
    <Head key="main-head">
      <title>{frontMatter.title && `${frontMatter.title} - `}Vevmester</title>
    </Head>,
    <main key="main-content" className={styles.main}>
      <article>
        {children}
      </article>
    </main>,
  ];
}
