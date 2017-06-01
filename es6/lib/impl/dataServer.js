import path from 'path'
import process from 'process'
import raw from 'raw-body'

function dataServer(dataFile) {
  const DatabaseClass = requireDatabase()
  let database
  if (DatabaseClass) {
    database = new DatabaseClass()
  }

  return async function dataServerAsync(ctx, next) {
    switch (ctx.path) {
      case '/data/load_todos':
        let data
        if (database) {
          data = database.load()
        } else {
          data = await loadData(dataFile)
        }
        ctx.type = 'application/json'
        ctx.body = JSON.stringify(data)
        break
      case '/data/save_todos':
        const receivedJson = await raw(ctx.req, {
          length: ctx.req.headers['content-length'],
          limit: '1mb',
          encoding: 'utf-8',
        })
        const received = JSON.parse(receivedJson)
        if (database) {
          database.save(received)
        } else {
          await saveData(dataFile, received)
        }
        ctx.type = 'application/json'
        ctx.body = JSON.stringify({ state: 'ok' })
        break
      default:
        await next()
    }
  }
}

function requireDatabase() {
  try {
    return require(path.join(process.cwd(), 'src/server/database.js')).default
  } catch (e) {
    return undefined
  }
}

async function loadData(dataFile) {
  const loadFile = require(path.join(process.cwd(), 'src/server/loadFile.js')).default
  const result = await loadFile(dataFile, transform)
  return result
}

async function saveData(dataFile, data) {
  const saveFile = require(path.join(process.cwd(), 'src/server/saveFile.js')).default
  return saveFile(dataFile, data)
}

function transform(data) {
  const iterateLoadedData = require(path.join(process.cwd(), 'src/server/iterateLoadedData.js')).default
  const withIterator = {
    [Symbol.iterator]: () => iterateLoadedData(data),
  }

  const todos = [...withIterator]
  const ids = todos.map((todo) => todo.id)
  const maxId = Math.max(0, ...ids)

  return {
    nextId: maxId + 1,
    todos,
  }
}

export default dataServer
