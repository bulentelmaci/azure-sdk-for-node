// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = '8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain9669?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain9669\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain9669\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Disabled\",\"validationData\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '559',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b70fbf55-5742-413e-a3d3-a1da394aefb3',
  'x-ms-client-request-id': '32aaded2-e607-45bf-9da9-7b58aa724bd5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/53b5d0bf-aced-4b5e-8e07-f7572e93c4d9?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'af4946e7-d8af-47ea-b5b4-8ac367eab831',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014949Z:af4946e7-d8af-47ea-b5b4-8ac367eab831',
  date: 'Wed, 22 Feb 2017 01:49:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain9669?api-version=2016-10-02', '*')
  .reply(201, "{\r\n  \"name\":\"cdnTestCustomDomain9669\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain9669\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Creating\",\"resourceState\":\"Creating\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Disabled\",\"validationData\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '559',
  'content-type': 'application/json; odata.metadata=minimal',
  expires: '-1',
  'retry-after': '10',
  'x-ms-request-id': 'b70fbf55-5742-413e-a3d3-a1da394aefb3',
  'x-ms-client-request-id': '32aaded2-e607-45bf-9da9-7b58aa724bd5',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/53b5d0bf-aced-4b5e-8e07-f7572e93c4d9?api-version=2016-10-02',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': 'af4946e7-d8af-47ea-b5b4-8ac367eab831',
  'x-ms-routing-request-id': 'WESTUS2:20170222T014949Z:af4946e7-d8af-47ea-b5b4-8ac367eab831',
  date: 'Wed, 22 Feb 2017 01:49:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/53b5d0bf-aced-4b5e-8e07-f7572e93c4d9?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '09ed1bf8-2906-41cf-8799-6a5dda2ac3a0',
  'x-ms-client-request-id': 'a0e265f0-18c1-4e83-9a89-5c214e65c76c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f043d9be-5953-4250-b771-d093e749f85a',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015020Z:f043d9be-5953-4250-b771-d093e749f85a',
  date: 'Wed, 22 Feb 2017 01:50:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/operationresults/53b5d0bf-aced-4b5e-8e07-f7572e93c4d9?api-version=2016-10-02')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '09ed1bf8-2906-41cf-8799-6a5dda2ac3a0',
  'x-ms-client-request-id': 'a0e265f0-18c1-4e83-9a89-5c214e65c76c',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14999',
  'x-ms-correlation-request-id': 'f043d9be-5953-4250-b771-d093e749f85a',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015020Z:f043d9be-5953-4250-b771-d093e749f85a',
  date: 'Wed, 22 Feb 2017 01:50:19 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain9669?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestCustomDomain9669\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain9669\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Disabled\",\"validationData\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '558',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '0d78336a-c992-4ba0-9c3b-d74cc39634a3',
  'x-ms-client-request-id': '2a3815ec-d41b-4432-a465-3ce33ed73002',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '1ec9f43b-8965-41d3-ba2e-8468f1c2bf79',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015021Z:1ec9f43b-8965-41d3-ba2e-8468f1c2bf79',
  date: 'Wed, 22 Feb 2017 01:50:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourceGroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customDomains/cdnTestCustomDomain9669?api-version=2016-10-02')
  .reply(200, "{\r\n  \"name\":\"cdnTestCustomDomain9669\",\"id\":\"/subscriptions/8fbd19e9-e8e0-4224-89f6-b1d5d86fb4c4/resourcegroups/cdnTestGroup1182/providers/Microsoft.Cdn/profiles/cdnTestProfile7643/endpoints/testEndpoint-1ccf2a61-a627-4715-8744-314680c0c1b8/customdomains/cdnTestCustomDomain9669\",\"type\":\"Microsoft.Cdn/profiles/endpoints/customdomains\",\"properties\":{\r\n    \"provisioningState\":\"Succeeded\",\"resourceState\":\"Active\",\"hostName\":\"sdk-1-1ccf2a61-a627-4715-8744-314680c0c1b8.azureedge-test.net\",\"customHttpsProvisioningState\":\"Disabled\",\"validationData\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '558',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': '0d78336a-c992-4ba0-9c3b-d74cc39634a3',
  'x-ms-client-request-id': '2a3815ec-d41b-4432-a465-3ce33ed73002',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': '1ec9f43b-8965-41d3-ba2e-8468f1c2bf79',
  'x-ms-routing-request-id': 'WESTUS2:20170222T015021Z:1ec9f43b-8965-41d3-ba2e-8468f1c2bf79',
  date: 'Wed, 22 Feb 2017 01:50:20 GMT',
  connection: 'close' });
 return result; }]];