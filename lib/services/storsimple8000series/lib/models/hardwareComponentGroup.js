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
 * The hardware component group.
 *
 * @extends models['BaseModel']
 */
class HardwareComponentGroup extends models['BaseModel'] {
  /**
   * Create a HardwareComponentGroup.
   * @member {string} displayName The display name the hardware component
   * group.
   * @member {date} lastUpdatedTime The last updated time.
   * @member {array} components The list of hardware components.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of HardwareComponentGroup
   *
   * @returns {object} metadata of HardwareComponentGroup
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'HardwareComponentGroup',
      type: {
        name: 'Composite',
        className: 'HardwareComponentGroup',
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
          kind: {
            required: false,
            serializedName: 'kind',
            type: {
              name: 'Enum',
              allowedValues: [ 'Series8000' ]
            }
          },
          displayName: {
            required: true,
            serializedName: 'properties.displayName',
            type: {
              name: 'String'
            }
          },
          lastUpdatedTime: {
            required: true,
            serializedName: 'properties.lastUpdatedTime',
            type: {
              name: 'DateTime'
            }
          },
          components: {
            required: true,
            serializedName: 'properties.components',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'HardwareComponentElementType',
                  type: {
                    name: 'Composite',
                    className: 'HardwareComponent'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = HardwareComponentGroup;