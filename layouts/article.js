import Head from 'next/head';
import styles from './styles/article.scss';

export default function Article(frontMatter) {
  return ({ children }) => [
    <Head key="main-head">
      <title>{frontMatter.title && `${frontMatter.title} - `}Vevmester</title>
      <meta name="description" content={frontMatter.description || 'Showcase website'} />
    </Head>,
    <main key="main-content" className={styles.main}>
      <article>
        {children}
      </article>
    </main>,
  ];
}
