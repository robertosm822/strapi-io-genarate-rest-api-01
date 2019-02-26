'use strict';

/**
 * Planets.js controller
 *
 * @description: A set of functions called "actions" for managing `Planets`.
 */

module.exports = {

  /**
   * Retrieve planets records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.planets.search(ctx.query);
    } else {
      return strapi.services.planets.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a planets record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.planets.fetch(ctx.params);
  },

  /**
   * Count planets records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.planets.count(ctx.query);
  },

  /**
   * Create a/an planets record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.planets.add(ctx.request.body);
  },

  /**
   * Update a/an planets record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.planets.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an planets record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.planets.remove(ctx.params);
  }
};
