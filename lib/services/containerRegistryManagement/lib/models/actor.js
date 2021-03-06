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
 * The agent that initiated the event. For most situations, this could be from
 * the authorization context of the request.
 *
 */
class Actor {
  /**
   * Create a Actor.
   * @member {string} [name] The subject or username associated with the
   * request context that generated the event.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Actor
   *
   * @returns {object} metadata of Actor
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Actor',
      type: {
        name: 'Composite',
        className: 'Actor',
        modelProperties: {
          name: {
            required: false,
            serializedName: 'name',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = Actor;
