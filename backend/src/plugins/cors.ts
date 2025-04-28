import fp from 'fastify-plugin'
import cors from '@fastify/cors'

export default fp(async (fastify, opts) => {
  fastify.register(cors, {
    origin: process.env.CORS_ORIGINS?.split(',') ?? ['*'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    credentials: true,
  })
})
