// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'jstesteastus2';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://jstesteastus2.eastus2.batch.azure.com';
  process.env['AZURE_SUBSCRIPTION_ID'] = '46241355-bb95-46a9-ba6c-42b554d71925';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/pools/nodesdktestpool1?api-version=2017-01-01.4.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool has been marked for deletion and is being reclaimed.\\nRequestId:6af9a2a7-7289-400d-a945-dd4f3c0087f9\\nTime:2017-02-03T22:00:37.5101705Z\"\r\n  }\r\n}", { 'content-length': '376',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6af9a2a7-7289-400d-a945-dd4f3c0087f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 22:00:36 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://jstesteastus2.eastus2.batch.azure.com:443')
  .delete('/pools/nodesdktestpool1?api-version=2017-01-01.4.0')
  .reply(409, "{\r\n  \"odata.metadata\":\"https://jstesteastus2.eastus2.batch.azure.com/$metadata#Microsoft.Azure.Batch.Protocol.Entities.Container.errors/@Element\",\"code\":\"PoolBeingDeleted\",\"message\":{\r\n    \"lang\":\"en-US\",\"value\":\"The specified pool has been marked for deletion and is being reclaimed.\\nRequestId:6af9a2a7-7289-400d-a945-dd4f3c0087f9\\nTime:2017-02-03T22:00:37.5101705Z\"\r\n  }\r\n}", { 'content-length': '376',
  'content-type': 'application/json;odata=minimalmetadata',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '6af9a2a7-7289-400d-a945-dd4f3c0087f9',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-content-type-options': 'nosniff',
  dataserviceversion: '3.0',
  date: 'Fri, 03 Feb 2017 22:00:36 GMT',
  connection: 'close' });
 return result; }]];