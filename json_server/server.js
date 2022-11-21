// JSON-SERVER //
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// PORTA JSON-SERVER //
const port = process.env.PORT || 8080;

server.use(middlewares);

// ROTAS PERSONALIZADAS //
server.use(jsonServer.rewriter(
  {
    // motoristas //
    "/todos_os_motoristas": "/motoristas",
    "/adicionar_motorista": "/motoristas",
    "/editar_motorista/:id": "/motoristas/:id",
    "/deletar_motorista/:id": "/motoristas/:id",

    // veiculos //
    "/todos_os_veiculos": "/veiculos",
    "/adicionar_veiculo": "/veiculos",
    "/editar_veiculo/:id": "/veiculos/:id",
    "/deletar_veiculo/:id": "/veiculos/:id",

    // clientes //
    "/todos_os_clientes": "/clientes",
    "/adicionar_cliente": "/clientes",
    "/editar_cliente/:id": "/clientes/:id",
    "/deletar_cliente/:id": "/clientes/:id",

    // trajetos //
    "/todos_os_trajetos": "/trajetos",
    "/adicionar_trajeto": "/trajetos",
    "/editar_trajeto/:id": "/trajetos/:id",
    "/deletar_trajeto/:id": "/trajetos/:id",

    // cronogramas //
    "/todos_os_cronogramas": "/cronogramas",
    "/adicionar_cronograma": "/cronogramas",
    "/editar_cronograma/:id": "/cronogramas/:id",
    "/deletar_cronograma/:id": "/cronogramas/:id"
  }
))
server.use(router);

// AVISO DA PORTA QUE O JSON-SERVER ESTÁ RODANDO //
server.listen(port, () => { console.log(`JSON Server está rodando na porta ${port}`) })

