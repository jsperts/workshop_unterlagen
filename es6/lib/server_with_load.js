require('babel-register')

const path = require('path')
const process = require('process')

require('./impl/server_with_load_impl').default(path.join(process.cwd(), 'data/database.txt'))
