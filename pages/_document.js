import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,600,600i,700,700i,900,900i&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet" />
          <style>
            {`body { margin: 0; }`}
          </style>
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