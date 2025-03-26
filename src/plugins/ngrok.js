import ngrok from '@ngrok/ngrok';

export default async function plugin(fastify, options) {
  if (process.env.ENABLE_NGROK !== 'true') {
    console.log('Ngrok is disabled');
    return;
  }

  try {
    const listener = await ngrok.forward({
      addr: process.env.PORT || 4000,
      authtoken: process.env.NGROK_AUTH_TOKEN,
      domain: process.env.NGROK_DOMAIN,
    });

    const ngrokUrl = listener.url();
    fastify.ngrokUrl = ngrokUrl;
    fastify.log.info(`Ngrok tunnel established at: ${ngrokUrl}`);
    fastify.log.info(`Server Messages URL: ${ngrokUrl}/messages`);
  } catch (error) {
    fastify.log.error('Failed to establish ngrok tunnel:', error);
  }
}
