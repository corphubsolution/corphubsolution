export const config = {
  runtime: 'edge',
};

export default function handler(req: Request) {
  const url = new URL(req.url);
  const host = req.headers.get('x-forwarded-host') || req.headers.get('host') || url.host;
  const proto = req.headers.get('x-forwarded-proto') || 'https';
  const baseUrl = `${proto}://${host}`;

  const txt = `# robots.txt for CORPHUB SOLUTION
User-agent: *
Allow: /

Disallow: /node_modules/
Disallow: /dist/

Sitemap: ${baseUrl}/sitemap.xml
`;

  return new Response(txt, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
    },
  });
}
