const node = 'D:\\ARQUIVOS\\WINDOWS\\PORTABLE_NodeJS\\node-v19.0.1-win-x64\\node_modules\\';



const jsonServer = require(node +  'json-server')
const cors = require(node +  'cors')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()

server.use(cors())
server.use(jsonServer.bodyParser)
server.use(middlewares)
server.use(router)

const PORT = 8000

server.listen(PORT, () => {
  console.log(`JSON Server is running on http://localhost:${PORT}`)
})
