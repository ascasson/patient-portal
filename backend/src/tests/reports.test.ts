import Fastify from 'fastify';
import app from '../app';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

describe('GET /reports', () => {
  let fastify;

  beforeAll(async () => {
    fastify = Fastify();
    await fastify.register(app);
    await fastify.ready();
  });

  afterAll(async () => {
    await fastify.close();
    await prisma.$disconnect();
  });

  it('should return a list of reports', async () => {
    const response = await fastify.inject({
      method: 'GET',
      url: '/reports',
    });

    expect(response.statusCode).toBe(200);
    console.log('response: ', response.payload)
    const data = JSON.parse(response.payload);
    expect(Array.isArray(data)).toBe(true);
  });
});