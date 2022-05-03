"use strict";

/**
 * content router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::content.content", {
  routes: [
    {
      method: "GET",
      path: "/test/:client",
      handler: "findByClient",
    },
  ],
});
