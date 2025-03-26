import { validateVapiSecret } from '../utils/auth.js';

const stories = [
  {
    title: 'The Wise Old Owl',
    content:
      'In a dense forest lived a wise old owl who helped all the animals solve their problems with thoughtful advice.',
  },
  {
    title: 'The Racing Wind',
    content:
      'The north wind and the sun had a race around the world, teaching them both that cooperation beats competition.',
  },
  {
    title: 'The Magic Garden',
    content:
      'A child discovered a garden where flowers sang and butterflies painted the sky with rainbow colors.',
  },
  {
    title: 'The Friendly Cloud',
    content:
      'A lonely cloud traveled the world making friends with everyone it rained upon, bringing joy with every droplet.',
  },
];

export default async function storyToolRoutes(fastify) {
  fastify.post('/story-tool', async (request, reply) => {
    if (!validateVapiSecret(request, reply)) {
      return;
    }

    const randomStory = stories[Math.floor(Math.random() * stories.length)];

    // follow response format: https://docs.vapi.ai/tools/custom-tools#server-response-format-providing-results-and-context
    const toolCallId = request.body.message?.toolCalls?.[0]?.id;
    const response = {
      results: [
        {
          toolCallId,
          result: randomStory,
          // error: "you are a bad tool"
        },
      ],
    };

    return response;
  });
}
