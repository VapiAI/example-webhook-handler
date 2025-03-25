export default async function customKnowledgeBaseRoutes(fastify) {
  fastify.get('/custom-knowledge-base', async (request, reply) => {
    return {
      message: {
        role: 'assistant',
        content: 'The ocean is blue because water absorbs everything but blue.',
      },
      documents: [
        {
          content:
            'The ocean is blue primarily because water absorbs colors in the red part of the light spectrum and scatters the blue light, making it more visible to our eyes.',
          similarity: 1,
        },
        {
          content:
            'Blue light is scattered more by the water molecules than other colors, enhancing the blue appearance of the ocean.',
          similarity: 0.5,
        },
      ],
    };
  });
}
