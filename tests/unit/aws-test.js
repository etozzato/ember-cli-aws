import Ember from 'ember';
import defaults from '../../initializers/aws';

test('it should rerturn a signed url with an Expires timestamp and the correct AWSAccessKeyId', function () {
  var url, key, s3;
  s3 = defaults['s3'];
  key = 'some_upload/123456/nice_photo.jpg';
  url = s3.getSignedUrl('getObject', {Bucket: 'attachment_storage_development', Key: key});
  ok(url.match(/Expires=\d+/));
  ok(url.match(new RegExp('AWSAccessKeyId=' + s3.config.credentials.accessKeyId)));
  ok(url.match(new RegExp(key)));
});
