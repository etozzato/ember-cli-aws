
/* jshint node: true */
'use strict';

export default {
  name: 'ember-cli-aws',
  s3: new AWS.S3( { Bucket: 'attachment_storage_development', credentials: { accessKeyId: '123456', secretAccessKey: 'lidsbflSFBSALFIUasbfisaubfasiofB' } } )
};
