# JS-BACKEND-AULA06

# 🚀 API - Companhia Aérea

## 📌 Sobre o Projeto
Projeto para registro de voos, mostrando como utilizar o POST para adicionar mais um voo, como utilizar o PUT para alterar as informações de um voo e como deletar um voo com DELETE.

## 🛠️ Tecnologias Utilizadas
- Node.js
- Express.js
- Thunder Client (para testes)

## 📡 Endpoints da API (Rotas)

| Método | Rota | Descrição |
| `GET` | `/voos` | Informações sobre os voos |
| `GET` | `/voos/:id` | Informações de um voo específico a partir do id |
| `POST` | `/voos` | Adiciona um voo |
| `PUT` | `/voos/:id` | Altera as informações de um voo específico a partir do id|
| `DELETE`| `/voos/:id` | Deleta um voo específico a partir do id |

## 🧪 Como Rodar e Testar
1. Clone o repositório
2. Execute `npm install`
3. Inicie com `node server.js`
4. Teste as rotas no Thunder Client
