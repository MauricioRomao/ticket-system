# Ticket System 


Sistema moderno e escalável de gestão e compra de ingressos desenvolvido para eventos de grande escala, com foco em alta performance, arquitetura limpa e suporte a milhares de requisições simultâneas.

O projeto foi idealizado para atender eventos como o **RRPL — Reis do Rompimento**, em Angola, garantindo uma experiência segura, rápida e confiável para os usuários.

---

# 📌 Objetivo

O principal objetivo do `ticket-system` é construir uma plataforma robusta de venda de ingressos capaz de:

- suportar grande volume de acessos simultâneos;
- evitar sobrecarga durante abertura de vendas;
- garantir segurança nas transações;
- fornecer arquitetura escalável e organizada;
- aplicar boas práticas modernas de engenharia de software.

---

# 🚀 Tecnologias Utilizadas

## Backend

- Node.js
- TypeScript
- Express.js
- Sequelize ORM
- MySQL
- JWT Authentication
- Yup Validation
- Dotenv

## Frontend

- React
- TypeScript
- Vite

## Arquitetura & DevOps

- Monorepo
- REST API
- Clean Architecture
- Modular Architecture
- Environment Variables
- Git & GitHub
- Docker (planejado)
- CI/CD (planejado)
 tests
---

# 🏗️ Arquitetura do Projeto

O projeto segue uma arquitetura modular para facilitar:

- manutenção;
- escalabilidade;
- separação de responsabilidades;
- reutilização de código;
- testes.

Estrutura atual:

```bash
ticket-system/
│
├── apps/
│   ├── api/        # Backend
│   └── web/        # Frontend
│
├── packages/       # Pacotes compartilhados
│
├── .gitignore
├── package.json
└── README.md
```

## Instalação

git clone https://github.com/MauricioRomao/ticket-system.git

## Instale as dependências

Backend

cd apps/api
npm install

Frontend

cd apps/web
npm install

Backend / Fronrend

npm run dev
