/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
  rewrites: async () => ({
    fallback: [
      // These rewrites are checked after both pages/public files
      // and dynamic routes are checked
      {
        source: "/:path*",
        destination: `http://localhost:5173/:path*`,
      },
    ],
  }),
};
