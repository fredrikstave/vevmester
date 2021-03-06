import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" type="image/png" href="/static/favicon.png" sizes="16x16" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato&display=swap" />
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