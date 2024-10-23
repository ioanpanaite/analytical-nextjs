module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/public/locales',
  ns: [ 
    'common', 
    'home', 
    'bridging-the-gap', 
    'shaping-business-culture',
    'business-systemic-coaching',
    'vision-incubator',
    'team-building',
    'group-business-coaching',
    'high-performance-coaching',
    'leadership',
    'training',
    'resilience-adaptability',
    'contact-us',
    'coaching-for-leaders'
  ],
}
