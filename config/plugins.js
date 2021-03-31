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