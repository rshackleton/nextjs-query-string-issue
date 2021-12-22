module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/:path((?!unsupported.html$).*)',
        destination: '/unsupported.html',
        has: [
          {
            type: 'header',
            key: 'User-Agent',
            value: '(.*Trident.*)',
          },
        ],
        permanent: false,
      },
    ];
  },
}
