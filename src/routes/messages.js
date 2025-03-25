import { validateVapiSecret } from '../utils/auth.js';

export default async function messagesRoutes(fastify) {
  // Messages webhook to receive server messages from Vapi
  fastify.post('/messages', async (request, reply) => {
    if (!validateVapiSecret(request, reply)) {
      return;
    }

    console.log('received request', request.body);
    const { message } = request.body;
    if (!message || !message.type) {
      reply.code(400).send({ error: 'Invalid message format' });
      return;
    }

    switch (message.type) {
      case 'status-update':
        console.log('Status update received:', message.status);
        if (message.status === 'ended') {
          console.log('Call ended reason:', message.endedReason);
          console.log('Call details:', message.call);
        }
        break;

      case 'transcript':
        console.log('Transcript received:', message.transcript);
        break;

      case 'model-output':
        console.log('Model output received:', message.output);
        break;

      case 'end-of-call-report':
        console.log('End of call report received:', message.report);
        break;

      case 'transfer-destination-request':
        const transferDestination = process.env.TRANSFER_DESTINATION;
        console.log('Transferring to destination:', transferDestination);
        return {
          destination: {
            type: 'number',
            message: 'Connecting you to our support line.',
            number: transferDestination,
          },
        };

      default:
        console.log('Received message type:', message.type);
    }

    return {
      success: true,
      message: `Processed ${message.type} message`,
    };
  });
}
