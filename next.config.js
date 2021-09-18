module.exports = {
    i18n: {
      locales: ['en', 'ru'],
      defaultLocale: 'ru',
    },
    env: {
      // apiUrl: 'https://api.renics.org',
      apiUrl: 'http://localhost:4000',
    },
    images: {
      domains: ['api.renics.org'],
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/shop',
          permanent: true,
        },
      ]
    },
}