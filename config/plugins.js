module.exports = ({ env }) => ({
  // ...
  upload: {
    provider: 'cloudinary',
    providerOptions: {
      cloud_name: 'dtpl7inip',
      api_key: '562387952174729',
      api_secret: 'E8HHVz52ucH8Fr9UcuRffju6NRU',
    },
    actionOptions: {
      upload: {},
      delete: {},
    },
  },
  // ...
  email: {
    provider: 'sendgrid',
    providerOptions: {
      apiKey: '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',
    },
    settings: {
      defaultFrom: 'thecoffeestudied@gmail.com',
      defaultReplyTo: 'thecoffeestudied@gmail.com',
      testAddress: 'quochuy170598@gmail.com',
    },
  },
});