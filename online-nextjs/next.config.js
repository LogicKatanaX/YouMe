/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const apiBase = process.env.YOUME_API_BASE_URL?.replace(/\/+$/, "");
    if (!apiBase) {
      return [];
    }
    return [
      { source: "/admin_profile", destination: `${apiBase}/admin_profile` },
      { source: "/api/:path*", destination: `${apiBase}/api/:path*` },
    ];
  },
};

module.exports = nextConfig;
