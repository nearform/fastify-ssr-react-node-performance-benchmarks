import Fastify from 'fastify'
import FastifyVite from '@fastify/vite'
import FastifyReact from '@fastify/react'

const server = Fastify()

await server.register(FastifyVite, {
  dev: process.argv.includes('--dev'),
  renderer: FastifyReact,
  root: import.meta.url,
})

await server.vite.ready()

await server.listen({ host: '0.0.0.0', port: 3000 })
