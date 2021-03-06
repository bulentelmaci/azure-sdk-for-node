/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * CDN endpoint is the entity within a CDN profile containing configuration
 * information such as origin, protocol, content caching and delivery behavior.
 * The CDN endpoint uses the URL format <endpointname>.azureedge.net.
 *
 * @extends models['TrackedResource']
 */
class Endpoint extends models['TrackedResource'] {
  /**
   * Create a Endpoint.
   * @member {string} [originHostHeader] The host header value sent to the
   * origin with each request. If you leave this blank, the request hostname
   * determines this value. Azure CDN origins, such as Web Apps, Blob Storage,
   * and Cloud Services require this host header value to match the origin
   * hostname by default.
   * @member {string} [originPath] A directory path on the origin that CDN can
   * use to retreive content from, e.g. contoso.cloudapp.net/originpath.
   * @member {array} [contentTypesToCompress] List of content types on which
   * compression applies. The value should be a valid MIME type.
   * @member {boolean} [isCompressionEnabled] Indicates whether content
   * compression is enabled on CDN. Default value is false. If compression is
   * enabled, content will be served as compressed if user requests for a
   * compressed version. Content won't be compressed on CDN when requested
   * content is smaller than 1 byte or larger than 1 MB.
   * @member {boolean} [isHttpAllowed] Indicates whether HTTP traffic is
   * allowed on the endpoint. Default value is true. At least one protocol
   * (HTTP or HTTPS) must be allowed.
   * @member {boolean} [isHttpsAllowed] Indicates whether HTTPS traffic is
   * allowed on the endpoint. Default value is true. At least one protocol
   * (HTTP or HTTPS) must be allowed.
   * @member {string} [queryStringCachingBehavior] Defines how CDN caches
   * requests that include query strings. You can ignore any query strings when
   * caching, bypass caching to prevent requests that contain query strings
   * from being cached, or cache every request with a unique URL. Possible
   * values include: 'IgnoreQueryString', 'BypassCaching', 'UseQueryString',
   * 'NotSet'
   * @member {string} [optimizationType] Specifies what scenario the customer
   * wants this CDN endpoint to optimize for, e.g. Download, Media services.
   * With this information, CDN can apply scenario driven optimization.
   * Possible values include: 'GeneralWebDelivery', 'GeneralMediaStreaming',
   * 'VideoOnDemandMediaStreaming', 'LargeFileDownload',
   * 'DynamicSiteAcceleration'
   * @member {string} [probePath] Path to a file hosted on the origin which
   * helps accelerate delivery of the dynamic content and calculate the most
   * optimal routes for the CDN. This is relative to the origin path.
   * @member {array} [geoFilters] List of rules defining the user's geo access
   * within a CDN endpoint. Each geo filter defines an acess rule to a
   * specified path or content, e.g. block APAC for path /pictures/
   * @member {string} [hostName] The host name of the endpoint structured as
   * {endpointName}.{DNSZone}, e.g. consoto.azureedge.net
   * @member {array} origins The source of the content being delivered via CDN.
   * @member {string} [resourceState] Resource status of the endpoint. Possible
   * values include: 'Creating', 'Deleting', 'Running', 'Starting', 'Stopped',
   * 'Stopping'
   * @member {string} [provisioningState] Provisioning status of the endpoint.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of Endpoint
   *
   * @returns {object} metadata of Endpoint
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Endpoint',
      type: {
        name: 'Composite',
        className: 'Endpoint',
        modelProperties: {
          id: {
            required: false,
            readOnly: true,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          name: {
            required: false,
            readOnly: true,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          },
          type: {
            required: false,
            readOnly: true,
            serializedName: 'type',
            type: {
              name: 'String'
            }
          },
          location: {
            required: true,
            serializedName: 'location',
            type: {
              name: 'String'
            }
          },
          tags: {
            required: false,
            serializedName: 'tags',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          originHostHeader: {
            required: false,
            serializedName: 'properties.originHostHeader',
            type: {
              name: 'String'
            }
          },
          originPath: {
            required: false,
            serializedName: 'properties.originPath',
            type: {
              name: 'String'
            }
          },
          contentTypesToCompress: {
            required: false,
            serializedName: 'properties.contentTypesToCompress',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          },
          isCompressionEnabled: {
            required: false,
            serializedName: 'properties.isCompressionEnabled',
            type: {
              name: 'Boolean'
            }
          },
          isHttpAllowed: {
            required: false,
            serializedName: 'properties.isHttpAllowed',
            type: {
              name: 'Boolean'
            }
          },
          isHttpsAllowed: {
            required: false,
            serializedName: 'properties.isHttpsAllowed',
            type: {
              name: 'Boolean'
            }
          },
          queryStringCachingBehavior: {
            required: false,
            serializedName: 'properties.queryStringCachingBehavior',
            type: {
              name: 'Enum',
              allowedValues: [ 'IgnoreQueryString', 'BypassCaching', 'UseQueryString', 'NotSet' ]
            }
          },
          optimizationType: {
            required: false,
            serializedName: 'properties.optimizationType',
            type: {
              name: 'String'
            }
          },
          probePath: {
            required: false,
            serializedName: 'properties.probePath',
            type: {
              name: 'String'
            }
          },
          geoFilters: {
            required: false,
            serializedName: 'properties.geoFilters',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'GeoFilterElementType',
                  type: {
                    name: 'Composite',
                    className: 'GeoFilter'
                  }
              }
            }
          },
          hostName: {
            required: false,
            readOnly: true,
            serializedName: 'properties.hostName',
            type: {
              name: 'String'
            }
          },
          origins: {
            required: true,
            serializedName: 'properties.origins',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'DeepCreatedOriginElementType',
                  type: {
                    name: 'Composite',
                    className: 'DeepCreatedOrigin'
                  }
              }
            }
          },
          resourceState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.resourceState',
            type: {
              name: 'String'
            }
          },
          provisioningState: {
            required: false,
            readOnly: true,
            serializedName: 'properties.provisioningState',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Endpoint;
