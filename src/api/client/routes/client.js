"use strict";

/**
 * client router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

// module.exports = createCoreRouter("api::client.client");
module.exports = {
  routes: [
    {
      method: "GET",
      path: "/clients/",
      handler: "client.find",
    },
    {
      method: "GET",
      path: "/clients/:name([a-z]*)",
      handler: "client.findOneByName",
    },
    {
      method: "GET",
      path: "/clients/:id",
      handler: "client.findOne",
    },
  ],
};
