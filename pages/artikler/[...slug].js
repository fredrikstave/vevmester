import { useRouter } from 'next/router';
import Head from 'next/head';
import LeftMenu from '../../src/components/LeftMenu';
import styles from './styles.scss';

function Main() {
  const router = useRouter()
  const { slug } = router.query;

  return [
    <Head key="main-head">
      <title>Vevmester</title>
      <meta name="description" content="Showcase website" />
    </Head>,
    <main key="main-content" className={styles.wrapper}>
      <LeftMenu />
      <div className={styles.articleContainer}>
        <article className={styles.article}>
          <h1 className={styles.title}>This is a title</h1>
          <strong className={styles.lead}>This is a little description of the article that should be short and to the point</strong>
          <em className={styles.byline}>Av Fredrik Stave</em>
          <p className={styles.paragraph}>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility and even when it is it almost always leaves broken Windows Registry keys behind it. Even if you have an anti-spyware tool your Windows Registry might be broken – developers of those tools are focused on removing Adware and spyware functionality, not every trace of software itself.</p>
          <p className={styles.paragraph}>Another category of software that is known to leave bits and pieces behind on uninstallation is games. There are a lot of special installation systems that creates strange files, unique entries in your registry file as well as changes system dll’s to other versions. Once you uninstall the game a lot of the special installation changes it made will be left behind, causing you problems.</p>
          <p className={styles.paragraph}>You should run an advanced registry cleaner for Windows that allows you to safely scan, clean, and repair registry problems with a few simple mouse clicks on a regular basis.</p>
          <p className={styles.paragraph}>Problems with the Windows Registry are a common cause of Windows crashes (blue screens) and error messages (memory as well as disk errors). By using a PC tune-up utility, your system will be more stable, your software will run quicker, and your operating system will boot faster.</p>
          <p className={styles.paragraph}>Registry problems can occur for many reasons, including references left behind after uninstallation; incorrect removal of software; missing or corrupt hardware drivers; or orphaned start-up programs. With a few easy steps, a good registry cleaner will scan your entire registry for any invalid entries and provide a list of the errors found.</p>
          <h2 className={styles.heading}>Type something</h2>
          <p className={styles.paragraph}>Over 92% of computers are infected with Adware and spyware. Such software is rarely accompanied by uninstall utility and even when it is it almost always leaves broken Windows Registry keys behind it. Even if you have an anti-spyware tool your Windows Registry might be broken – developers of those tools are focused on removing Adware and spyware functionality, not every trace of software itself.</p>
          <p className={styles.paragraph}>Another category of software that is known to leave bits and pieces behind on uninstallation is games. There are a lot of special installation systems that creates strange files, unique entries in your registry file as well as changes system dll’s to other versions. Once you uninstall the game a lot of the special installation changes it made will be left behind, causing you problems.</p>
          <p className={styles.paragraph}>You should run an advanced registry cleaner for Windows that allows you to safely scan, clean, and repair registry problems with a few simple mouse clicks on a regular basis.</p>
        </article>
      </div>
    </main>,
  ];
}

export default Main;
