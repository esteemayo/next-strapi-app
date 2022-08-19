"use strict";

/**
 *  sport controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::sport.sport", {
  count(ctx) {
    var { query } = ctx.request;
    return strapi.query("api::sport.sport").count({ where: query });
  },
});
