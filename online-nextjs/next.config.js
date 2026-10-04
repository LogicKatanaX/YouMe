/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    const apiBase = process.env.YOUME_API_BASE_URL?.replace(/\/+$/, "");
    if (!apiBase) return [];

    return [
      { source: "/admin_profile", destination: `${apiBase}/admin_profile` },
      { source: "/fetch_info", destination: `${apiBase}/fetch_info` },
      { source: "/download", destination: `${apiBase}/download` },
      { source: "/progress/:path*", destination: `${apiBase}/progress/:path*` },
      { source: "/files", destination: `${apiBase}/files` },
      { source: "/delete_file", destination: `${apiBase}/delete_file` },
      { source: "/music_search", destination: `${apiBase}/music_search` },
      { source: "/music_download", destination: `${apiBase}/music_download` },
      { source: "/video_info", destination: `${apiBase}/video_info` },
      { source: "/music_stream_url", destination: `${apiBase}/music_stream_url` },
      { source: "/music_proxy", destination: `${apiBase}/music_proxy` },
      { source: "/download_file/:path*", destination: `${apiBase}/download_file/:path*` },
      { source: "/api/:path*", destination: `${apiBase}/api/:path*` },
      { source: "/healthz", destination: `${apiBase}/healthz` },
      { source: "/login", destination: `${apiBase}/login` },
      { source: "/logout", destination: `${apiBase}/logout` },
      { source: "/auth/local", destination: `${apiBase}/auth/local` },
    ];
  },
};

module.exports = nextConfig;
