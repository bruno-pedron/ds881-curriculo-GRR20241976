# Projeto Individual: Currículo Online DS881

Este repositório é um **template** para a atividade prática individual da disciplina DS881. O objetivo é aplicar conceitos de conteinerização, automação de pipeline CI/CD e governança de código em um cenário de projeto real (seu currículo ou portfólio profissional).

## 🚀 Quick Start - Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ instalado

### Instalação e Execução

```bash
# 1. Instalar dependências
npm install

# 2. Iniciar servidor de desenvolvimento (Vite)
npm run dev

# 3. Abrir navegador em http://localhost:8080
# Hot reload está habilitado - edições salvas refletem instantaneamente
```

### Build para Produção

```bash
npm run build    # Gera arquivos otimizados em /dist
npm run preview  # Visualizar build localmente
```

## 📁 Estrutura do Projeto

```
.
├── index.html              # HTML principal
├── src/
│   ├── js/                 # Módulos JavaScript (ES6)
│   │   ├── main.js        # Entry point
│   │   ├── theme.js       # Gerenciamento de tema
│   │   ├── animations.js  # Animações com Intersection Observer
│   │   ├── canvas.js      # Animação do hero
│   │   ├── modal.js       # Gerenciamento de modais
│   │   └── utils.js       # Funções utilitárias
│   └── css/
│       └── styles.css     # CSS customizado
├── public/                # Arquivos estáticos (imagens, assets)
├── dist/                  # Output do build (gerado)
├── vite.config.js         # Configuração do Vite
├── package.json           # Dependências e scripts
└── .eslintrc             # ESLint config

```

## 🎯 Arquitetura Vite

Este projeto utiliza **Vite** como build tool moderno com:

- ✅ **Hot Module Replacement (HMR)** - Recarregamento automático ao salvar
- ✅ **Módulos ES6** - Imports/exports nativos
- ✅ **Desenvolvimento rápido** - Zero config, pronto para usar
- ✅ **Build otimizado** - Minificação e code splitting automático
- ✅ **Server pronto para Docker** - Configurado para port 8080

Ver [`src/README.md`](src/README.md) para detalhes da arquitetura modular.

## 🐳 Próximo Passo: Docker

Após validar localmente com `npm run dev`, o projeto será containerizado com:

- **Dockerfile**: Imagem base `node:22-alpine` com dependências
- **docker-compose.yml**: Serviço Vite com volume mount em 8080
- **Bind mount**: `./src` → `/app/src` para hot reload no container

## Instruções de Configuração Inicial

Para iniciar o seu trabalho, siga estes passos:

1. Clique no botão verde **"Use this template"** e selecione **"Create a new repository"**.
2. Nomeie o repositório como `ds881-curriculo-GRR99999999`.
3. Certifique-se de que a visibilidade seja **Public**.
4. Configure a proteção da branch `main` imediatamente (instruções na seção 2.2).

---

## 1. Objetivo
Desenvolver e publicar um currículo profissional ou portfólio pessoal utilizando o GitHub Pages. O projeto deve demonstrar o domínio de ferramentas de conteinerização, automação de pipeline CI/CD e governança de código via fluxos de trabalho estruturados, mesmo em um ambiente de desenvolvimento individual.

## 2. Requisitos Técnicos

### 2.1. Tecnologia e Stack
* **Aplicação:** O site deve ser estático. É livre a escolha entre HTML/CSS puro ou o uso de geradores de site estático (SSG) como Astro, Hugo ou Jekyll.
* **Hospedagem:** O deploy final deve ser realizado obrigatoriamente no GitHub Pages.

### 2.2. Conteinerização do Ambiente de Desenvolvimento (Docker)
O repositório deve fornecer a infraestrutura necessária para que o projeto possa ser editado e testado localmente sem a exigência de instalar as linguagens ou dependências base (como Node.js ou Ruby) no sistema operacional do hospedeiro.
* **Dockerfile:** Deve especificar uma imagem base adequada (ex: `node:alpine` ou `ruby:alpine`) e preparar o ambiente com as ferramentas necessárias para executar o gerador de site estático escolhido.
* **Docker Compose (`docker-compose.yml`):** Deve ser configurado para iniciar o servidor de desenvolvimento nativo da ferramenta (ex: `vite dev`, `jekyll serve` ou `hugo server`).
* **Mapeamento de Volumes (Bind Mounts):** A configuração do Compose deve mapear o diretório local do código-fonte para o diretório de trabalho dentro do contêiner. Isso é obrigatório para garantir o funcionamento do *hot reload* (atualização automática no navegador ao salvar um arquivo).
* **Portas:** O servidor de desenvolvimento dentro do contêiner deve ser mapeado para responder na porta `8080` do localhost da máquina hospedeira.

### 2.3. Workflow de Git e Governança
Apesar de ser um projeto individual, o projeto deve seguir as boas prática do desenvolvimento com git:
* **Proteção de Branch:** A branch `main` deve estar configurada como protegida nas configurações do repositório.
* **Fluxo de Trabalho:** É proibido realizar *push* direto na `main`. Toda alteração deve ser feita em uma branch secundária (ex: `feat/nome-da-feature`) e integrada via **Pull Request (PR)**.
* **Critérios de Merge:** O merge para a `main` só deve ser permitido se o pipeline de CI estiver com status "verde" (sucesso).
* **Mensagens de Commit:** Devem seguir o padrão *Conventional Commits* (ex: `feat:`, `fix:`, `ci:`, `docs:`).

### 2.4. CI/CD (GitHub Actions)
Implementação de um workflow automatizado (`.github/workflows/main.yml`) contendo:
1.  **Linter/Static Analysis:** Verificação de sintaxe e padrões de código.
2.  **Build:** Validação de que a aplicação compila corretamente dentro do ambiente de CI.
3.  **Deploy:** Publicação automatizada no GitHub Pages disparada após o merge na branch `main`.

## 3. Documentação
O arquivo `README.md` deve conter:
1.  Link público do currículo em produção.
2.  Instruções detalhadas para execução do ambiente local via Docker.
3.  Prints ou descrição da configuração de proteção da branch `main` aplicada no GitHub.

## 4. Critérios de Avaliação

| Item | Peso |
| :--- | :--- |
| Configuração correta de Docker (Dockerfile e Compose) | 30% |
| Pipeline de CI/CD funcional (Lint, Build e Deploy) | 30% |
| Evidência de uso de Pull Requests e Branch Protection | 20% |
| Qualidade da documentação e histórico de commits | 10% |
| Funcionamento da aplicação no GitHub Pages | 10% |


---

## 5. Entrega e Avaliação

A entrega deve ser realizada através do formulário disponibilizado pelo professor, contendo o link do seu repositório público.

---

> **Atenção:** Não esqueça de anexar no final deste README ou na documentação do projeto um print comprovando que a regra de **Branch Protection** da `main` foi configurada no GitHub.
