export const config = {
  runtime: 'edge',
};

const PAGES = [
  { path: '', priority: '1.0', changefreq: 'weekly' },
  { path: 'services/accommodation', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/transport', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/material-supply', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/vendor-management', priority: '0.9', changefreq: 'monthly' },
  { path: 'services/event-management', priority: '0.9', changefreq: 'monthly' },
  { path: 'about', priority: '0.8', changefreq: 'monthly' },
  { path: 'contact', priority: '0.8', changefreq: 'monthly' },
  { path: 'privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: 'terms', priority: '0.3', changefreq: 'yearly' },
];

export default function handler(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || url.host;
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = `${proto}://${host}`;
  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(
  (page) => `  <url>
    <loc>${baseUrl}/${page.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
).join('\n')}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
