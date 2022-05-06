"use strict";

/**
 *  client controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::client.client", {
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["content.logo", "customizations"],
    };

    const { data } = await super.find(ctx);

    return data;
  },
  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["content.logo", "customizations"],
    };

    const { data } = await super.findOne(ctx);

    return data;
  },
});
