"use strict";

/**
 * content service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::content.content", ({ strapi }) => ({
  send() {
    console.log("SERVICE");
  },
}));
