/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Outputs a Single-Page Application (SPA).
  distDir: './dist', // Changes the build output directory to `./dist/`.
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

export default nextConfig;
