# Projeto Empresa Sustentável

Aplicação web para cadastrar ações sustentáveis realizadas por empresas e montar um ranking com base na pontuação acumulada. O projeto é dividido em duas partes:

- **Backend**: API em Node.js com Express e SQLite.
- **Frontend**: Interface em React para cadastro e visualização do ranking.

## Ideia do programa

A proposta é registrar ações sustentáveis informadas por empresas, atribuir pontos para cada ação e exibir um ranking das empresas mais sustentáveis.

O fluxo funciona assim:

1. A empresa informa nome, CNPJ e uma ação sustentável.
2. O sistema calcula a pontuação da ação escolhida.
3. A API salva os dados no banco SQLite local.
4. A tela de ranking busca os registros e mostra as empresas com maior pontuação.

## Estrutura do projeto

- `db/backend` - servidor Express e banco SQLite.
- `frontend` - aplicação React com as telas de home, cadastro e ranking.
- `package.json` da raiz - não é o ponto principal para rodar o projeto; o foco está nas pastas `db/backend` e `frontend`.

## Pré-requisitos

Antes de iniciar, você precisa ter instalado:

- [Node.js](https://nodejs.org/) 18 ou superior
- `npm`

Se estiver no Windows, use o PowerShell ou o Prompt de Comando.

## Como inicializar o programa

### 1. Abrir o projeto

Abra um terminal na pasta raiz do projeto.

Se você já estiver dentro da pasta do repositório, não precisa informar o caminho completo.

```powershell
cd .
```

### 2. Instalar e iniciar o backend

Em um terminal separado, entre na pasta do backend e instale as dependências:

```powershell
cd .\db\backend
npm install
npm start
```

O backend vai subir em:

- `http://localhost:3001`

Ele cria automaticamente o banco SQLite local `projeto_sustentavel.db` na pasta `db/backend`.

### 3. Instalar e iniciar o frontend

Em outro terminal, entre na pasta do frontend e instale as dependências:

```powershell
cd .\frontend
npm install
npm start
```

O frontend vai abrir em:

- `http://localhost:3000`

### 4. Acessar no navegador

Depois que os dois servidores estiverem rodando, abra o navegador em:

- `http://localhost:3000`

A aplicação do frontend faz requisições para a API em `http://localhost:3001`.

## Funcionalidades

- Página inicial com apresentação do projeto.
- Cadastro de ações sustentáveis com CNPJ validado em 14 dígitos numéricos.
- Pontuação automática conforme a ação escolhida.
- Ranking das empresas ordenado por pontuação.

## Rotas da API

A API do backend expõe estas rotas:

- `GET /acoes` - lista todas as ações cadastradas em ordem decrescente de pontos.
- `POST /acoes` - cadastra uma nova ação ou soma pontos quando o CNPJ já existe.

Exemplo de payload para cadastro:

```json
{
  "nome_empresa": "Empresa Exemplo",
  "cnpj": "12345678000199",
  "acao_sustentavel": "Compensação de Carbono",
  "pontos": 50
}
```

## Observações importantes

- O frontend usa URL fixa para a API em `http://localhost:3001`.
- O botão de limpar ranking na interface apenas limpa a lista exibida na tela, não apaga dados do banco.
- O arquivo `frontend/README.md` ainda tem o texto padrão do Create React App e pode ser substituído por este README da raiz, se você quiser centralizar a documentação.

## Solução de problemas

### A porta 3001 já está em uso

Feche outro processo que esteja usando a porta ou altere a constante `PORT` em `db/backend/server.js`.

### A porta 3000 já está em uso

O React geralmente oferece para abrir em outra porta. Você também pode fechar o processo que está ocupando a porta.

### O frontend não conecta no backend

Confirme se o backend está rodando antes de abrir o frontend.

### Erro de dependência faltando

Rode `npm install` dentro da pasta correspondente (`db/backend` ou `frontend`).
