/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 * 
 * Code generated by Microsoft (R) AutoRest Code Generator 0.15.0.0
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

var models = require('./index');

var util = require('util');

/**
 * @class
 * Initializes a new instance of the USqlAssemblyClr class.
 * @constructor
 * A Data Lake Analytics catalog U-SQL assembly CLR item.
 * @member {string} [databaseName] Gets or sets the name of the database.
 * 
 * @member {string} [assemblyClrName] Gets or sets the name of the assembly.
 * 
 * @member {string} [clrName] Gets or sets the name of the CLR.
 * 
 */
function USqlAssemblyClr() {
  USqlAssemblyClr['super_'].call(this);
}

util.inherits(USqlAssemblyClr, models['CatalogItem']);

/**
 * Defines the metadata of USqlAssemblyClr
 *
 * @returns {object} metadata of USqlAssemblyClr
 *
 */
USqlAssemblyClr.prototype.mapper = function () {
  return {
    required: false,
    serializedName: 'USqlAssemblyClr',
    type: {
      name: 'Composite',
      className: 'USqlAssemblyClr',
      modelProperties: {
        computeAccountName: {
          required: false,
          serializedName: 'computeAccountName',
          type: {
            name: 'String'
          }
        },
        version: {
          required: false,
          serializedName: 'version',
          type: {
            name: 'String'
          }
        },
        databaseName: {
          required: false,
          serializedName: 'databaseName',
          type: {
            name: 'String'
          }
        },
        assemblyClrName: {
          required: false,
          serializedName: 'assemblyClrName',
          type: {
            name: 'String'
          }
        },
        clrName: {
          required: false,
          serializedName: 'clrName',
          type: {
            name: 'String'
          }
        }
      }
    }
  };
};

module.exports = USqlAssemblyClr;