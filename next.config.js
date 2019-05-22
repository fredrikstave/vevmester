const withSass = require('@zeit/next-sass')
const Sentry = require('@sentry/browser');

Sentry.init({
 dsn: 'https://e29f7dba2eee4fa6ad42954cb80e3df7@sentry.io/1465918',
 environment: process.env.NODE_ENV,
 debug: process.env.NODE_ENV === 'development',
});

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]___[hash:base64:5]",
  },
});
