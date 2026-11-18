# 🌱 EcoAlerta

Sistema web para registro, monitoramento e gerenciamento de ocorrências ambientais.

O **EcoAlerta** foi desenvolvido como projeto acadêmico da **Global Solution FIAP**, com o objetivo de permitir que cidadãos registrem problemas ambientais de forma simples, colaborativa e organizada, contribuindo para a conscientização e acompanhamento de ocorrências que impactam o meio ambiente.

---

# Como subir o projeto?
- É simples, basta subir a imagem docker do banco com o comando docker-compose up.
- Em seguida, na pasta ecoalerta (backend) podemos digitar spring-boot:run.
- E por ultimo, na pasta frontend, npm run dev.
- O link para acessar será exibido no terminal.

# 📋 Funcionalidades

## 👤 Usuários

- Cadastro de usuários
- Login
- Logout

## 🌎 Ocorrências

- Cadastro de ocorrência ambiental
- Edição de ocorrência
- Exclusão de ocorrência
- Listagem de ocorrências
- Visualização detalhada
- Upload de imagens
- Classificação por nível de risco

## 📊 Dashboard

- Total de ocorrências cadastradas
- Quantidade por nível de risco
- Indicadores estatísticos
- Gráfico de distribuição das ocorrências
- Filtros por risco

## 🤖 Inteligência Artificial

- Classificação automática de risco ambiental baseada na descrição informada pelo usuário
- Sugestão automática de nível de risco
- Exibição de confiança da classificação
- Justificativa da decisão sugerida

---

# 🛠 Tecnologias Utilizadas

## Frontend

- React
- Vite
- Bootstrap
- React Router DOM
- Axios
- Chart.js
- React ChartJS 2

## Backend

- Java 21
- Spring Boot
- Spring Data JPA
- Maven
- Swagger/OpenAPI

## Banco de Dados

- PostgreSQL

## Infraestrutura

- Docker
- Docker Compose

## Versionamento

- Git
- GitHub

---

# 🏗 Arquitetura da Solução

```text
Usuário
    │
    ▼
React + Vite
    │
    ▼
Spring Boot REST API
    │
    ▼
PostgreSQL
```

### Componentes

```text
Frontend
├── Login
├── Cadastro
├── Dashboard
├── Ocorrências
└── Inteligência Artificial

Backend
├── REST API
├── Upload de Imagens
├── Classificação IA
├── Swagger
└── Regras de Negócio

Banco
└── PostgreSQL
```

---

# 🗃 Modelo de Dados

## USER

| Campo | Tipo |
|---------|---------|
| id | Long |
| name | String |
| email | String |
| password | String |
| created_at | DateTime |

---

## OCCURRENCE

| Campo | Tipo |
|---------|---------|
| id | Long |
| title | String |
| description | String |
| address | String |
| image_url | String |
| risk_level | Enum |
| status | Enum |
| created_at | DateTime |
| user_id | FK |

---

## Relacionamento

```text
USER
  │
  └───── 1:N ─────► OCCURRENCE
```

Um usuário pode registrar diversas ocorrências ambientais.

---

# 🌎 Fluxo da Aplicação

```text
Cadastro
    ↓
Login
    ↓
Dashboard
    ↓
Nova Ocorrência
    ↓
Upload de Imagem
    ↓
Análise IA
    ↓
Salvar Ocorrência
    ↓
Listagem
    ↓
Detalhamento
    ↓
Edição ou Exclusão
```

---

# 🤖 Inteligência Artificial

## Objetivo

Auxiliar a classificação inicial de uma ocorrência ambiental utilizando análise textual da descrição informada pelo usuário.

A Inteligência Artificial não substitui avaliação técnica ou vistoria especializada. Sua função é fornecer uma classificação preliminar para apoiar a triagem e priorização dos registros.

---

## Fluxo de Funcionamento

```text
Usuário descreve ocorrência
          │
          ▼
Análise de Texto
          │
          ▼
Classificação Automática
          │
          ├── LOW
          ├── MEDIUM
          └── HIGH
          │
          ▼
Exibição da Sugestão
```

---

## Exemplos

| Descrição | Sugestão | Justificativa |
|------------|------------|------------|
| Queimada próxima de diversas residências | HIGH | Alto potencial de dano e risco à população |
| Grande acúmulo de lixo em área urbana | MEDIUM | Possível impacto ambiental e sanitário |
| Pequeno descarte irregular isolado | LOW | Impacto reduzido e localizado |

---

## Benefícios

- Triagem automática
- Redução do esforço manual
- Padronização das classificações
- Priorização de ocorrências críticas
- Apoio à tomada de decisão

---

# ☁️ Cloud Computing

## Arquitetura Proposta

```text
Frontend
React + Vite
        │
        ▼
Azure Static Web Apps
        │
        ▼
Backend Spring Boot
        │
        ▼
Azure App Service
        │
        ▼
Azure Database for PostgreSQL
        │
        ▼
Azure Blob Storage
        │
        ▼
Azure AI Vision
```

---

## Benefícios da Nuvem

### Escalabilidade

Permite expansão automática de recursos conforme aumento da demanda.

### Disponibilidade

Alta disponibilidade da aplicação e dos dados.

### Monitoramento

Utilização do Azure Monitor para observabilidade e métricas.

### Segurança

Proteção dos dados, controle de acessos e backups gerenciados.

### Armazenamento

Persistência de imagens utilizando Azure Blob Storage.

---

# 🧪 Testes

## Testes Unitários

- AiClassificationServiceTest
- OccurrenceServiceTest
- OccurrenceControllerTest
- AuthControllerTest

---

## Testes de Integração

- OccurrenceIntegrationTest

---

## Cenários Validados

| Caso de Teste | Status |
|---------------|--------|
| Cadastro de usuário | ✅ |
| Login válido | ✅ |
| Login inválido | ✅ |
| Cadastro de ocorrência | ✅ |
| Edição de ocorrência | ✅ |
| Exclusão de ocorrência | ✅ |
| Upload de imagens | ✅ |
| Dashboard | ✅ |
| IA de classificação | ✅ |

---

# 📸 Principais Funcionalidades

✅ Cadastro de Usuários

✅ Login e Logout

✅ Dashboard com Indicadores

✅ Dashboard com Gráfico

✅ CRUD Completo de Ocorrências

✅ Upload de Imagens

✅ Classificação por Nível de Risco

✅ Inteligência Artificial

✅ Swagger

✅ Docker

✅ PostgreSQL

✅ Interface Responsiva

---

# 🚀 Evoluções Futuras

- Azure AI Vision para análise de imagens
- Geolocalização automática
- Aplicativo Mobile
- Notificações em tempo real
- Painel administrativo
- Dashboard avançado
- Integração com órgãos ambientais
- Sistema de auditoria de decisões

---

# ▶️ Como Executar o Projeto

## Backend

```bash
mvn spring-boot:run
```

ou

```bash
./mvnw spring-boot:run
```

---

## Frontend

```bash
npm install
```

```bash
npm run dev
```

---

# 📚 Documentação da API

Após iniciar a aplicação:

```text
http://localhost:8080/swagger-ui/index.html
```

---

# 🎓 Projeto Acadêmico

Projeto desenvolvido para a **Global Solution FIAP**, aplicando conceitos de:

- Desenvolvimento Web
- APIs REST
- Banco de Dados Relacional
- Arquitetura de Software
- Computação em Nuvem
- Inteligência Artificial
- Testes de Software
- Boas Práticas de Engenharia de Software

---

# 👨‍💻 Equipe

**Projeto EcoAlerta**

FIAP - Global Solution

2026

---

> 🌱 Tecnologia a serviço do meio ambiente.
