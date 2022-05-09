"use strict";

/**
 *  client controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::client.client", {
  async find(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["content.logo", "customizations", "consents"],
    };

    const { data } = await super.find(ctx);

    return data;
  },
  async findOne(ctx) {
    ctx.query = {
      ...ctx.query,
      populate: ["content.logo", "customizations", "consents"],
    };

    const { data } = await super.findOne(ctx);

    return data;
  },
  async findOneByName(ctx) {
    ctx.query = {
      filters: {
        name: ctx.params.name,
      },
      populate: ["content.logo", "customizations", "consents"],
    };

    const { data } = await super.find(ctx)[0];

    return data;
  },
});
