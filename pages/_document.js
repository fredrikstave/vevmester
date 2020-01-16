import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" sizes="16x16" />

          <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i,900,900i&display=swap" />
          <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" />
          <link rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'" href="https://fonts.googleapis.com/css?family=Lato&display=swap" />
          <noscript>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i,900,900i&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato&display=swap" />
          </noscript>
          <style>{`
            body {
              margin: 0;
            }
          `}</style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;