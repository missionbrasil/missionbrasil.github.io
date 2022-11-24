/**
 * @api {get} /forms-data/customers Retornar respostas do formulário
 * @apiVersion 1.0.0
 * @apiName Obtem as respostas do formulário
 * @apiGroup Resposta do formulário
 * @apiDescription Retornar a lista de respostas de todas as questões do formulário.
 *
 * @apiParam (Query) {Number} formId Id do formulário que deseja pegar as respostas
 * @apiParam (Query) {String} initialDate Data inicial para filtrar os registros. O formato da data é: YYYY-MM-DD . Exemplo: 2022-01-01
 * @apiParam (Query) {String} finalDate Data final para filtrar os registros. O formato da data é: YYYY-MM-DD . Exemplo: 2022-01-01
 * @apiParam (Query) {Number} page Página que deseja buscar
 * 
 * @apiHeader {String} client-id É o valor do client id gerado no dashboard do cliente na parte de configurações
 * @apiHeader {String} client-secret É o valor do client secret gerado no dashboard do cliente na parte de configurações
 * 
 * @apiSuccess {String} total  É o total de registro que existe.
 * @apiSuccess {Number} page  É página que você informou.
 * @apiSuccess {Number} itemsPerPage Total de registro que retorna por página. O padrão é 10 registros.
 * @apiSuccess {Object[]} data São os registros retornados.
 * @apiSuccess {String} data.form_name Nome do formulário.
 * @apiSuccess {String} data.form_id Id do formulário.
 * @apiSuccess {Object[]} data.answers Listar como as respostas de todas as questões do formulário de uma pessoa.
 * @apiSuccess {Number} data.answers.order Ordem da questão no formulário.
 * @apiSuccess {String} data.answers.question Texto da questão do formulário.
 * @apiSuccess {String} data.answers.answer Resposta para a questão do formulário.
 * 
 *
 * @apiSuccessExample Sucesso 200:
 *     HTTP/1.1 200 OK
 *     {
 *       "total": 100,
 *       "page": 1
 *       "itemsPerPage": 10,
 *       "data": [
 *          {
 *              "form_name": "Formulário teste",
 *              "form_id": 1
 *              "answers": [
 *                  { "order": 1, "question": "Qual é o seu nome?", "answer": "João e maria" },
 *                  { "order": 2, "question": "Qual é o seu primeiro nome?", "answer": "João e maria" }
 *                  { "order": 3, "question": "Qual é o seu primeiro sobrenome?", "answer": "João e maria" }
 *              ]
 *          }
 *       ]
 *     }
 *
 *
 * @apiErrorExample Erro 404:
 *     HTTP/1.1 404 Formulário não encontrado
 *     {
 *       "message": "Formulário informado não foi encontrado"
 *     }
 * 
 * @apiErrorExample Erro 401:
 *     HTTP/1.1 401 Não informou o client-id e o client-secret corretos no header da requisição
 *     {
 *       "message": "Credenciais são inválidas!"
 *     }
 * 
 * @apiErrorExample Erro 400:
 *     HTTP/1.1 400 Não foi informado as dados obrigatórios para fazer a requisição.
 *     {
 *       "message": "Campo nome_do_campo_aqui é obrigatório."
 *     }
 */