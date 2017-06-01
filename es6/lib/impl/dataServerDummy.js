import dummyData from './dummyData'

async function dataServer(ctx, next) {
  switch (ctx.path) {
    case '/data/load_todos':
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
      ctx.type = 'application/json'
      ctx.body = JSON.stringify(dummyData)
      break
    default:
      await next()
  }
}

export default dataServer
