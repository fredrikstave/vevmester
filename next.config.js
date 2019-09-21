const withSass = require('@zeit/next-sass');
const images = require('remark-images');
const emoji = require('remark-emoji');
const metadata = require('remark-metadata');
const frontmatter = require('remark-frontmatter');

const withMDX = require('next-mdx-enhanced')({
  defaultLayout: true,
  fileExtensions: ['mdx', 'md'],
  remarkPlugins: [images, emoji, frontmatter, metadata],
});

module.exports = withMDX(
  withSass({
    pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    cssModules: true,
    cssLoaderOptions: {
      importLoaders: 1,
      localIdentName: "[local]___[hash:base64:5]",
    },
  })
);
