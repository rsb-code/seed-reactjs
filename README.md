# Seed React JS

- [Introdução ao Redux](#markdown-header-introducao-ao-redux)
- [Introdução ao BDD e TDD](#markdown-hearder-introducao-ao-bdd)
- [Introdução ao Teste Unitário](#markdown-hearder-introducao-ao-teste-unitario)
- [Introdução ao Teste E2E](#markdown-hearder-introducao-ao-teste-e2e)
- [Instalação](#markdown-header-instalacao)
  - [Yarn](#markdown-header-yarn) 
  - [Docker](#markdown-header-docker) 
  - [VS Code](#markdown-header-vs-code)
- [Arquitetura](#markdown-header-arquitetura) 
  - [Visão Geral](#markdown-header-visao-geral) 
  - [Organização de Pastas](#markdown-header-organizacao-de-pastas)
- [Features](#markdown-header-features)
- [Git](#markdown-header-git) 
  - [Branch](#markdown-header-branch) 
  - [Nomenclatura](#markdown-header-nomenclatura) 
  - [develop](#markdown-header-develop) 
  - [homolog](#markdown-header-homolog)
  - [master](#markdown-header-master) 
  - [feature/{nome}](#markdown-header-featurenome) 
  - [hotfix/{nome}](#markdown-header-hotfixnome) 
  - [tags/{versão}](#markdown-header-tagsversao) 
  - [Fluxo de Trabalho](#markdown-header-fluxo-de-trabalho) 
  - [Commit](#markdown-header-commit) 
  - [Pull Resquest](#markdown-header-pull-resquest)
- [Devops](#markdown-header-devops) 
  - [Docker](#markdown-header-docker) 
  - [Pipelines](#markdown-header-pipelines)
- [Code Standart](#markdown-header-code-standart) 
  - [ESlint](#markdown-header-layout) 
  - [Nomenclatura e Nomeação](#markdown-header-nomenclatura-e-nomeacao)
- [Referências](#markdown-header-referencias)

# Introdução ao Redux

:warning: **O uso do Redux no projeto não é obrigatório, deve ser utilizá-lo apenas quando houver uma REAL necessidade da aplicação**

O próprio criador do Redux tem um artigo explicando sobre isto: [Leia aqui](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

**_O que é o Redux?_**
O Redux é um conteiner de estado previsível. tem o objetivo de gerenciar um estado global para toda a aplicação, distribuindo assim o estado (State) global entre todos os componentes na árvore da aplicação.

Atualmente o React tem features que nos possibilitam a dispensar o uso do Redux para este fim, como os **Hooks** e **Contextos**.

Na estruturação dos arquivos de redux, foi adotada a organização das pastas de acordo com o padrão Ducks Modular Redux [Leia](https://github.com/erikras/ducks-modular-redux).

# Hooks

Hooks são uma feature do React. Eles permitem que você use o state e outros recursos do React sem escrever uma classe.

[Leia](https://pt-br.reactjs.org/docs/hooks-intro.html)

# Formik

O Formik é uma lib para gerenciamento de componentes de formulários. Ela é bastante simples de usar, possui alguns helpers e validadores bem descritivos e fáceis de usar.

[Leia mais aqui](https://jaredpalmer.com/formik/docs/tutorial)

# Jest

O Jest é um framework para a criação de testes unitários.

Pode ser facilmente utilizada com Babel, TypeScript, Angular, Vue. É uma biblioteca que tem como uma das suas caracteristicas a simplicidade, rapidez e excelente reputação na a comunidade React, tanto que utilizando o CRA (Create React App) o Jest vem configurado no projeto.

# Jest Cucumber

O Jest Cucumber é uma implementação alternativa ao Cucumber que roda por cima do Jest. É utilizado para a criação de cenários de teste no BDD.

# Introdução ao BDD

O BDD é mais uma técnica incorporada ao modelo ágil de desenvolvimento, o BDD que visa aumentar o entendimento do sistema entre o time de dev e a equipe gerencial acerca das especificações e requisitos do sistema.

BDD nada mais é que o desenvolvimento do software orientado ao comportamento do mesmo.

# Introdução ao Teste Unitário

O teste unitário são os testes realizados nas pequenas partes do sistema, ou seja nas funções do seu código. Servem para garantir a integrididade e coesão do seu conjunto de funções, ou seja do seu sistema.

# Introdução ao Teste E2E

# Instalação

## Yarn

## Docker

## VS Code

# Arquitetura

## Visão Geral

## Organização de Pastas

# Features

Nessa seção será apresentado as features instaladas e uma prevê descrição de qual sua relevância para o seed.

| Data       | Nome          | Descrição |
| ---------- | ------------- | --------- |
| 16/09/2019 | Redux         |           |
| 20/09/2019 | Jest          |           |
| 20/09/2019 | Jest-Cucumber |           |
| 20/09/2019 | Puppeteer     |           |
| 16/09/2019 | ESLint        |           |
| 20/09/2019 | Axios         |           |
| 20/09/2019 | Hooks         |           |
| 19/09/2019 | Formik        |           |
| 19/09/2019 | Yup           |           |
|            |               |           |

# Git

## Branch

As branches estão organizadas de forma que os ambientes fiquem separados, para facilitar o desenvolvimento e deixar o fluxo de trabalho mais seguro.

### Nomenclatura

Os nomes das branchs devem seguir o seguinte padrão:

1. Possuir somente letras minúsculas;
2. Espaçamento entre as palavras deve-se usar "-";
3. Não deve-se usar caracteres especiais como "^" ou "'".

### develop

A _branch_ `develop` será a mais atualizada, com relação ao desenvolvimento, dela partiram as atualizações para as branches de `homolog` e `master`, as quais refletem respectivamente aos ambientes de homologação e produção.

### homolog

A _branch_ `homolog` reflete diretamente ao ambiente de homologação, ela é um estágio anterior ao ambiente de produção, e recebe _Pull Request_ somente da branch `develop`.

### master

A _branch_ `master`, por sua vez, reflete diretamente ao ambiente de produção, ela é o estágio mais atualizado do produto. Recebe atualização somente via _Pull Request_ da branch `homolog`.

### feature/{nome}

As features são as novas implementações do sistema, deverá ser criada sempre à partir da branch `develop`, e após finalizar as implementações, efetuar o _merge_ das implementações via _Pull Request_ para a `develop`.

Após o _Pull Request_ ser finalizado, a _branch_ criada deverá ser finalizada.

### hotfix/{nome}

Os hotfixes, são ajustes de bugs e totalmente pontuais (não devem conter novas implementações). São criados à partir da _branch_ que possuí o problema e após a resolução, deve-se atualizar em
cascata às outras branches.

Exemplos:

`master` -> `hotfix` >> `master` >> `homolog` >> `develop`

`homolog` -> `hotfix` >> `homolog` >> `develop`

`develop` -> `hotfix` >> `develop`

### tags/{versão}

Ao criar uma versão estável da aplicação em produção, deverá ser gerado uma `tag`, com o intuíto de não afetar as outras versões futuras da aplicação.

## Fluxo de Trabalho

Ao iniciar o desenvolvimento, deve-se usar o seguintes passos.

1. Clonar a aplicação

2. Criar uma _branch_ `feature` à partir da `develop`

- Pode ser criada pelo painel online da Azure devops;
- Para criar localmente:

```bash
git pull origin develop
git checkout -b feature/{nome} develop
```

3. Commit das alterações

4. Criar _Pull Request_ para a branch `develop`

5. Fechar a branch `feature` criada

## Commit

As mensagens de _commit_, devem ser escritas em Português e explicar de forma sucinta quais foram as modificações feitas no projeto.

## Pull Resquest

Para atualizar as `branches` utilizaremos o _Pull Request_ ao invés de executarmos um merge diretamente.

Ao abrir uma requisição, para efeutar o _merge_, dois revisores deveram aprovas as modificações feitas no código, caso no aprovem, automaticamente a PR é cancelada e deve-se avisar ao resposável o motivo da reprovação.

# Devops

## Docker

## Pipelines

Para disparar uma _Pipeline_ basta aprovar um _Pull Request_ em uma das branches que refletem os ambientes (`develop`, `homolog` e `master`), este processo pode ser acompanhado pelos logs do Azure DevOps.

# Code Standart

:warning: **\_Para a padronização do código e boas práticas é imprescindível o uso de **linters** e **formatadores**\_**

No projeto estão os seguintes arquivos de configuração:

`.editorconfig` - Este arquivo sobrescreve algumas configurações da IDE
`.eslintrc` - Configurações do ESLint, nele estão definidos os plugins usados, parsers e as regras para checagem e validação do código
`.prettierrc` - Configurações do Prettier, como o uso de tabs ao invés de espaços na formatação, tamanho da tabulação...
`.prettierignore` - Arquivos que serão ignorados pelo Prettier

[TOC]

### ESLint

#### _Airbnb_

O guia de estilos padrão para o ESLint a ser seguido deverá ser o do **Airbnb**

Guia das Regras do Airbnb code style [Link](https://github.com/airbnb/javascript/tree/master/react#basic-rules)

#### _Plugins_

Os plugins que estarão configurados juntamente com o ESLint são:

- _React_
- _React Hooks_
- _JSX A11y_
- _Prettier_
- _Import_

### Prettier

O **Prettier** será o formatador de código padrão utilizado para desenvolvimento, além de estar instalado no sistema o mesmo deverá ter sua extensão instalada na IDE, para o **VSCode** a extensão pode ser instalada na aba de extensões ou com o comando:

`ext install esbenp.prettier-vscode`

### Editorconfig

Deve ser instalado na IDE a extensão do Editorconfig, que permite realizar algumas sobrescritas nos arquivos de configuração da IDE. No **VSCode** pode ser instalado pela aba de extensões ou com o comando:

`ext install EditorConfig`

---

### Outras Configurações **_(opcionais)_**

#### Pre commit e Lint Staged

Existe um script configurado que é executado antes de cada commit, ele escanea os arquivos e verifica se existem erros nos mesmo antes de realizar o commit, isto ajuda a manter o repositório mais limpo de erros. :smile:

#### Formatação ao salvar arquivo

- No VSCode uma boa recomendação seria habilitar a formatação ao salvar os arquivos, basta adicionar no settings do VSCode:

```json
"editor.formatOnSave": true
```

A padronização de codificação atendem às seguintes finalidades:

- Criar uma aparência consistente para o código, para que os desenvolvedores possam se concentrar no conteúdo e não no layout;
- Permitir que os desenvolvedores entendam o código com mais rapidez, fazendo suposições com base na experiência anterior;
- Facilitar a cópia, a alteração e a manutenção do código de forma rápida e prática.

## **Nomenclatura e Nomeação**

- **Idioma codificação:** Inglês;
- PascalCase ou camelCase?

| Identificador | Formatação | Exemplo |
| ------------- | ---------- | ------- |
|               |            |         |

- Não utilize abreviações;
- Quando na utilização de acrônimos, utilize Pascal case ou camel case para acrônimos de mais de dois caracteres, exemplo: `HtmlButton` ou `htmlButton`. Entretanto, acrônimos de apenas dois caracteres utilizem maiúsculas: `System.IO` em vez de `System.Io` e `System.Web.UI` em vez de `System.Web.Ui`.

# Test-Driven Development TDD

# Referências
