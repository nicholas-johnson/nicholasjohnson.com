const sitemap = require('nextjs-sitemap-generator')

sitemap({
  //   alternateUrls: {
  //     en: 'https://example.en',
  //     es: 'https://example.es',
  //     ja: 'https://example.jp',
  //     fr: 'https://example.fr',
  //   },
  baseUrl: 'https://nicholasjohnson.com',
  //   ignoredPaths: ['admin'],
  //   extraPaths: ['/extraPath'],
  pagesDirectory: __dirname + '/pages',
  targetDirectory: 'public/',
  sitemapFilename: 'sitemap.xml',
  nextConfigPath: __dirname + '/next.config.js',
  ignoredExtensions: ['png', 'jpg'],
  //   pagesConfig: {
  //     '/login': {
  //       priority: '0.5',
  //       changefreq: 'daily',
  //     },
  //   },
  //   sitemapStylesheet: [
  //     {
  //       type: 'text/css',
  //       styleFile: '/test/styles.css',
  //     },
  //     {
  //       type: 'text/xsl',
  //       styleFile: 'test/test/styles.xls',
  //     },
  //   ],
})
