/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Cloudflare Pages 部署：纯静态导出
  output: 'export',
  trailingSlash: true,
  images: {
    // 静态导出禁用 next/image 优化
    unoptimized: true,
  },
  // Pages build 跳过 TS 类型检查（lunar-javascript 没有类型声明）
  typescript: {
    ignoreBuildErrors: true,
  },
  // 静态导出不需要这些
  experimental: {},
};

module.exports = nextConfig;
