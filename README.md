
# Testes Automatizados com Cypress

Este projeto tem como objetivo demonstrar a automação de testes utilizando o [Cypress](https://www.cypress.io/), uma poderosa ferramenta de testes end-to-end. Os testes são realizados na aplicação de demonstração [OrangeHRM](https://opensource-demo.orangehrmlive.com/).

## Pré-requisitos

Antes de iniciar, você precisa ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalando o Node.js

1. **Windows/Mac/Linux**:
   - Acesse: https://nodejs.org/
   - Baixe e instale a versão LTS recomendada para sua plataforma.

2. Verifique se a instalação foi bem-sucedida:
   ```bash
   node -v
   npm -v
   ```

## Instalação do Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/testes-cypress.git
   cd testes-cypress
   ```

2. Instale as dependências do projeto (incluindo o Cypress):
   ```bash
   npm install
   ```

3. Instale o Cypress (caso ainda não esteja incluído nas dependências):
   ```bash
   npm install cypress --save-dev
   ```

## Executando os Testes

Para abrir o Test Runner do Cypress (modo interativo):
```bash
npx cypress open
```

Para rodar os testes no modo headless (em terminal):
```bash
npx cypress run
```

## Estrutura dos Testes

Os testes estão localizados na pasta `cypress/e2e/` e cobrem os seguintes cenários:


## Contribuição

Sinta-se à vontade para abrir issues ou enviar pull requests com melhorias!
