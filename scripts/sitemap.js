const globby = require('globby');
const fs = require('fs');
const prettier = require('prettier');
const siteConfig = require('../config/site-config.json');

globby(['src/pages/*', '!src/pages/_*', '!src/pages/api', '!src/pages/404.tsx']).then((pages) => {
  const sitemapTemplate = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...pages.map((page) => {
      const path = page.replace(/(src\/|pages|\.[a-z]+|\/index)/g, '');

      return `
      <url>
      <loc>https://${siteConfig.hostName + path}</loc>
      </url>
      `;
    }),
    `</urlset>`,
  ];
  const sitemap = prettier.format(sitemapTemplate.join(''), {
    parser: 'html',
  });

  fs.writeFile('public/sitemap.xml', sitemap, { encoding: 'utf-8' }, (err) => {
    if (err) throw new Error(err);
    console.log('Sitemap generated.');
  });
});
