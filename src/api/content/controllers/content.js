"use strict";

/**
 *  content controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
const { convertRestQueryParams } = require("strapi-utils");
const url = require("url");

module.exports = createCoreController("api::content.content", ({ strapi }) => ({
  async find(ctx) {
    const query = url.parse(ctx.req.url, true).query;

    if (!query.client)
      return ctx.send(
        { error: "Client id missing (contents?client=<id>)" },
        400
      );

    ctx.query = {
      populate: "*",
      filters: {
        client: {
          id: query.client,
        },
      },
    };

    const { data, meta } = await super.find(ctx, {
      limit: 1,
    });

    return { data, meta };
  },
}));
