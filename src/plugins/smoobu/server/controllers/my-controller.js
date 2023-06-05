'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('smoobu')
      .service('myService')
      .getWelcomeMessage();
  },
});
