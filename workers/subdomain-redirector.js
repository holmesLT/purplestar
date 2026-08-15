// Cloudflare Worker: redirect purplestar.techhouse.ccwu.cc to purplestar.cc
// Deploy via: wrangler deploy --name subdomain-redirector
export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const target = `https://purplestar.cc${url.pathname}${url.search}`;
    return Response.redirect(target, 301);
  },
};
