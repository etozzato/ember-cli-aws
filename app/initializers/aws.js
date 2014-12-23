// var Client = require('knox/lib/index.js');

export default {
  name: 'aws',
  initialize: function(container, application) {
    container.register('aws-client:main', Client);
    application.inject('route', 'Client', 'aws-client:main');
  },
  Client
};
