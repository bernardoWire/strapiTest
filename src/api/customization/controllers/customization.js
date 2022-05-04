"use strict";

/**
 *  customization controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const url = require("url");

module.exports = createCoreController("api::customization.customization", {
  async find(ctx) {
    const query = url.parse(ctx.req.url, true).query;

    if (!query.client)
      return ctx.send(
        { error: "Client id missing (customizations?client=<id>)" },
        400
      );

    ctx.query = {
      ...ctx.query,
      populate: "*",
      filters: {
        client: {
          id: query.client,
        },
      },
    };

    const { data } = await super.find(ctx, {
      limit: 1,
    });

    return data.map((content) => {
      delete content.attributes.client;

      return content;
    });
  },
});
