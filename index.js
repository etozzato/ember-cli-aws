/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-aws',
  included: function included(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/aws-sdk-js/dist/aws-sdk.min.js');
  }
};
