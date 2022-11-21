const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('banco_de_dados/db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(jsonServer.rewriter({
  "/todos_os_funcionarios": "/funcionarios",
  "/adicionar_funcionario": "/funcionarios",
  "/editar_funcionario/:id": "/funcionarios/:id",
  "/deletar_funcionario/:id": "/funcionarios/:id",
  "/teste": "/funcionarios"
}))
server.use(router);
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })

