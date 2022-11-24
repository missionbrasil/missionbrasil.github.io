define({ "api": [
  {
    "type": "get",
    "url": "/forms-data/customers",
    "title": "Retornar respostas do formulário",
    "version": "1.0.0",
    "name": "Obtem_as_respostas_do_formulário",
    "group": "Resposta_do_formulário",
    "description": "<p>Retornar a lista de respostas de todas as questões do formulário.</p>",
    "query": [
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "formId",
        "description": "<p>Id do formulário que deseja pegar as respostas</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "initialDate",
        "description": "<p>Data inicial para filtrar os registros. O formato da data é: YYYY-MM-DD . Exemplo: 2022-01-01</p>"
      },
      {
        "group": "Query",
        "type": "String",
        "optional": false,
        "field": "finalDate",
        "description": "<p>Data final para filtrar os registros. O formato da data é: YYYY-MM-DD . Exemplo: 2022-01-01</p>"
      },
      {
        "group": "Query",
        "type": "Number",
        "optional": false,
        "field": "page",
        "description": "<p>Página que deseja buscar</p>"
      }
    ],
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "client-id",
            "description": "<p>É o valor do client id gerado no dashboard do cliente na parte de configurações</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "client-secret",
            "description": "<p>É o valor do client secret gerado no dashboard do cliente na parte de configurações</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "total",
            "description": "<p>É o total de registro que existe.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>É página que você informou.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "itemsPerPage",
            "description": "<p>Total de registro que retorna por página. O padrão é 10 registros.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data",
            "description": "<p>São os registros retornados.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.form_name",
            "description": "<p>Nome do formulário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.form_id",
            "description": "<p>Id do formulário.</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "data.answers",
            "description": "<p>Listar como as respostas de todas as questões do formulário de uma pessoa.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "data.answers.order",
            "description": "<p>Ordem da questão no formulário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.answers.question",
            "description": "<p>Texto da questão do formulário.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "data.answers.answer",
            "description": "<p>Resposta para a questão do formulário.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Sucesso 200:",
          "content": "HTTP/1.1 200 OK\n{\n  \"total\": 100,\n  \"page\": 1\n  \"itemsPerPage\": 10,\n  \"data\": [\n     {\n         \"form_name\": \"Formulário teste\",\n         \"form_id\": 1\n         \"answers\": [\n             { \"order\": 1, \"question\": \"Qual é o seu nome?\", \"answer\": \"João e maria\" },\n             { \"order\": 2, \"question\": \"Qual é o seu primeiro nome?\", \"answer\": \"João e maria\" }\n             { \"order\": 3, \"question\": \"Qual é o seu primeiro sobrenome?\", \"answer\": \"João e maria\" }\n         ]\n     }\n  ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Erro 404:",
          "content": "HTTP/1.1 404 Formulário não encontrado\n{\n  \"message\": \"Formulário informado não foi encontrado\"\n}",
          "type": "json"
        },
        {
          "title": "Erro 401:",
          "content": "HTTP/1.1 401 Não informou o client-id e o client-secret corretos no header da requisição\n{\n  \"message\": \"Credenciais são inválidas!\"\n}",
          "type": "json"
        },
        {
          "title": "Erro 400:",
          "content": "HTTP/1.1 400 Não foi informado as dados obrigatórios para fazer a requisição.\n{\n  \"message\": \"Campo nome_do_campo_aqui é obrigatório.\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/index.js",
    "groupTitle": "Resposta_do_formulário",
    "sampleRequest": [
      {
        "url": "https://api.missionbrasil.com.br/v1/forms-data/customers"
      }
    ]
  }
] });
