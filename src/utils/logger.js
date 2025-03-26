export const loggerConfig = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:mm:ss',
      ignore: 'pid,hostname',
      messageFormat: '{msg}',
    },
  },
  serializers: {
    res(reply) {
      return {
        statusCode: reply.statusCode,
        body: reply.raw?.payload
      };
    }
  }
};
