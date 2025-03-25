import dotenv from 'dotenv';
import Fastify from 'fastify';

import customKnowledgeBaseRoutes from './routes/custom-knowledge-base.js';
import messagesRoutes from './routes/messages.js';
import ngrokPlugin from './plugins/ngrok.js';
import sensiblePlugin from './plugins/sensible.js';
import { loggerConfig } from './utils/logger.js';

dotenv.config();
const app = Fastify({
  logger: loggerConfig,
});

// plugins
app.register(sensiblePlugin);
app.register(ngrokPlugin);

// routes
app.register(messagesRoutes);
app.register(customKnowledgeBaseRoutes);

const start = async () => {
  try {
    const port = process.env.PORT || 4000;
    await app.listen({
      port,
    });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
