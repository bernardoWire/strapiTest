"use strict";

/**
 *  content controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::content.content", ({ strapi }) => ({
  async find(ctx) {
    const { data, meta } = await super.find(ctx, {
      populate: "*",
    });

    const userId = ctx.state.user.id;
    return data.filter(
      (content) => content.attributes.client.data.id === userId
    );

    return { data, meta };
  },
}));
