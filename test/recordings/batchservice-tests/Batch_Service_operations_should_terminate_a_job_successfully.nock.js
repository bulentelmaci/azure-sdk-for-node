// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/terminate?api-version=2017-01-01.4.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 03 Feb 2017 22:00:30 GMT',
  etag: '0x8D44C801191EF5B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '96503717-d6a7-496c-bb9a-f353d637114c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/terminate',
  date: 'Fri, 03 Feb 2017 22:00:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .post('/jobs/HelloWorldJobNodeSDKTest/terminate?api-version=2017-01-01.4.0')
  .reply(202, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 03 Feb 2017 22:00:30 GMT',
  etag: '0x8D44C801191EF5B',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '96503717-d6a7-496c-bb9a-f353d637114c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  dataserviceid: 'https://jstesteastus2.eastus2.batch.azure.com/jobs/HelloWorldJobNodeSDKTest/terminate',
  date: 'Fri, 03 Feb 2017 22:00:29 GMT',
  connection: 'close' });
 return result; }]];