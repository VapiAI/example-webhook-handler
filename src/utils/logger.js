export const loggerConfig = {
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:mm:ss',
      ignore: 'pid,hostname',
      messageFormat: '{msg}',
    },
  },
};
