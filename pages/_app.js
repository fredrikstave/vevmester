import React from 'react';
import { MDXProvider } from '@mdx-js/react';
// import Page from '../components/Page';
// import Title from '../components/Title';
// import Text from '../components/Text';
// import Heading from '../components/Heading';
// import List from '../components/List';

const components = {
  wrapper: props => (
    <Page {...props} />
  ),
  // h1: ({ children }) => <Title>{children}</Title>,
  // h2: ({ children }) => <Heading>{children}</Heading>,
  // h3: ({ children }) => <Heading>{children}</Heading>,
  // h4: ({ children }) => <Heading>{children}</Heading>,
  // h5: ({ children }) => <Heading>{children}</Heading>,
  // h6: ({ children }) => <Heading>{children}</Heading>,
  // ul: props => <List {...props} />,
  // p: ({ children }) => <Text>{children}</Text>,
};

const App = ({ Component, pageProps }) => (
  <MDXProvider components={components}>
    <Component {...pageProps} />
  </MDXProvider>
);

export default App;
