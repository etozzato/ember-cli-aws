import Ember from 'ember';
import defaults from '../../initializers/aws';

module('Client', {
  setup: function() {},
  teardown: function() {}
});


test('', function () {
  // aws-client.createClient({});
  // console.log(defaults['ember-cli-aws']);
  console.log(defaults['Client']);
  equal(1,1);
});

// test('localhost should return default', function(){
//   var urlChecker = defaults['urlChecker'].create();
//   equal(urlChecker.get('subdomain'), 'default');
// });

// test('127.0.0.1 should return default', function(){
//   var urlChecker = defaults['urlChecker'].create({ customURI: '127.0.0.1' });
//   equal(urlChecker.get('subdomain'), 'default');
// });

// test('google.co.uk should return default', function() {
//   var urlChecker = defaults['urlChecker'].create({ customURI: "google.co.uk" });
//   equal(urlChecker.get('subdomain'), 'default');
// });

// test('ftp.google.co.uk should return ftp', function() {
//   var urlChecker = defaults['urlChecker'].create({ customURI: "ftp.google.co.uk" });
//   equal(urlChecker.get('subdomain'), 'ftp');
// });

// test('secure.github.com should return secure', function() {
//   var urlChecker = defaults['urlChecker'].create({ customURI: "secure.github.com" });
//   equal(urlChecker.get('subdomain'), 'secure');
// });
