'use strict';

import fp from 'fastify-plugin';
import sensible from '@fastify/sensible';

export default fp(async function (fastify, opts) {
  fastify.register(sensible, {
    errorHandler: false,
  });
});
