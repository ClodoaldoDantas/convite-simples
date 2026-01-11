# Convite Simples

Aplicação para criar e gerenciar convites digitais de eventos de forma rápida e amigável. Construída com Next.js 16 (App Router), TypeScript, Tailwind CSS v4 e Drizzle ORM.

## Visão Geral

- Foco em UX simples para criação/edição/compartilhamento de convites
- Autenticação com Better Auth (email/senha + Google)
- Banco de dados Turso (libSQL) via Drizzle ORM
- Formulários com React Hook Form + Zod
- UI baseada em Radix UI, Tailwind CSS v4 e `class-variance-authority`
- Qualidade de código com Biome (lint e format)

## Stack

- Next.js 16.1 (App Router)
- TypeScript 5
- React 19
- Tailwind CSS v4 (via PostCSS)
- Drizzle ORM + Turso (libSQL)
- Better Auth (cookies com `nextCookies`)
- Zod + React Hook Form
- Radix UI Primitives
- Resend (envio de e-mails)
- Biome

## Funcionalidades

- Cadastro e login (email/senha) com verificação de e-mail
- Login social com Google (opcional)
- Criação, edição e listagem de convites
- Compartilhamento de convites
- Validações em tempo real (Zod + RHF)
- Notificações com `react-hot-toast`

## Pré-requisitos

- Node.js 20+ (recomendado)
- pnpm
- Conta Turso (libSQL) para banco
- Chave API Resend (para e-mails)
- Credenciais OAuth do Google (para login social)

## Configuração

1. Instale dependências:

```bash
pnpm install
```

2. Crie um arquivo `.env` na raiz com as variáveis de ambiente:

```bash
# Banco de dados Turso
TURSO_DATABASE_URL="libsql://<sua-instancia>.turso.io"
TURSO_AUTH_TOKEN="<token>"

# Better Auth (server)
BETTER_AUTH_SECRET="<string-secreta>"
BETTER_AUTH_URL="https://seu-dominio.com" # ou http://localhost:3000 em dev

# Better Auth (client)
NEXT_PUBLIC_BASE_URL="http://localhost:3000" # usado pelo client do Better Auth

# E-mails (Resend)
RESEND_API_KEY="<chave-api-resend>"

# Login social Google
GOOGLE_CLIENT_ID="<client-id>"
GOOGLE_CLIENT_SECRET="<client-secret>"
```

## Banco de Dados

Gere e aplique migrações do Drizzle:

```bash
# gerar migrações a partir dos schemas
pnpm db:generate

# aplicar migrações
pnpm db:migrate

# opcional: abrir Drizzle Studio
pnpm db:studio
```

## Scripts

```bash
pnpm dev        # iniciar servidor de desenvolvimento
pnpm build      # build de produção
pnpm start      # servir build de produção
pnpm lint       # checagens com Biome
pnpm format     # formatação automática com Biome
pnpm db:generate
pnpm db:migrate
pnpm db:studio
```

## Execução

```bash
pnpm dev
# http://localhost:3000
```

## Deploy

- Recomenda-se Vercel para deploy da aplicação Next.js
- Configure as variáveis de ambiente do `.env` no provedor
- Turso: garanta acesso da instância ao ambiente de produção
- Resend e Google OAuth: configure domínios e credenciais

## Contribuindo

Encontrou um bug ou tem uma sugestão? Abra uma [issue](https://github.com/clodoaldodantas/convite-simples/issues) e descreva o problema ou a funcionalidade desejada.

## Créditos

- Autor: Clodoaldo Dantas — https://clodoaldo.dev/

