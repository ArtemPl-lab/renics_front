module.exports = {
    i18n: {
      locales: ['en', 'ru'],
      defaultLocale: 'ru',
    },
    env: {
      apiUrl: 'https://api.renics.org',
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