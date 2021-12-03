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
