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

/**
 * @class
 * Initializes a new instance of the AccessUri class.
 * @constructor
 * A disk access SAS uri.
 *
 * @member {string} [accessSAS] A SAS uri for accessing a disk.
 *
 */
function AccessUri() {
}

/**
 * Defines the metadata of AccessUri
 *
 * @returns {object} metadata of AccessUri
 *
 */
AccessUri.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'AccessUri',
    type: {
      name: 'Composite',
      className: 'AccessUri',
      modelProperties: {
        accessSAS: {
          required: false,
          readOnly: true,
          serializedName: 'properties.output.accessSAS',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = AccessUri;