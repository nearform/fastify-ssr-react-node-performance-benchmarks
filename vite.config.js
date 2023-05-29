import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

import viteReact from '@vitejs/plugin-react'
import fastifyReact from '@fastify/react/plugin'

const path = fileURLToPath(import.meta.url)

const root = join(dirname(path), 'client')
const plugins = [
  viteReact({
    fastRefresh: false,
  }),
  fastifyReact(),
]

export default {
  root,
  plugins,
}
