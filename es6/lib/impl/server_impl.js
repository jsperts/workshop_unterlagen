import process from 'process'
import path from 'path'

import Koa from 'koa'
import middleware from 'koa-webpack'

import { PORT } from './settings'
import dataServer from './dataServerDummy'

const app = new Koa()

const config = require(path.join(process.cwd(), 'webpack.config.js'))

app.use(dataServer)

app.use(middleware({
  config: config,
}))

app.use(async (ctx, next) => {
  ctx.status = 404
  ctx.type = 'text'
  ctx.body = 'Page Not Found'
})

app.listen(PORT, '127.0.0.1')

console.log(`now listening on http://localhost:${PORT}`)
