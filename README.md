# Icebreaker Questions API

A public REST API that serves random or categorized ice-breaking questions in both English and Korean.

---

## Features

- Get all questions or by category
- Get random question globally or by category
- Multi-language support (EN/KR)
- MongoDB (Mongoose) + Express
- Swagger documentation

---

## Tech Stack

- Node.js
- Express
- MongoDB Atlas + Mongoose
- Swagger UI (OpenAPI 3.0)

---

## Categories

- `fun`
- `deep`
- `work`
- `travel`
- `relationship`
- `favorites`
- `culture`
- `future`
- `childhood`
- `hypothetical`
- `wildcard`

---

## API Endpoints

| Method | Endpoint                              | Description                         |
| ------ | ------------------------------------- | ----------------------------------- |
| GET    | `/api/v1/questions`                   | Get all questions                   |
| GET    | `/api/v1/questions/random`            | Get one random question             |
| GET    | `/api/v1/questions/{category}`        | Get all questions in a category     |
| GET    | `/api/v1/questions/{category}/random` | Get one random question in category |

---

## Live API (Render)

- Base URL: [https://icebreaker-api-us13.onrender.com](https://icebreaker-api-us13.onrender.com)

Example calls:

- [`GET /api/v1/questions`](https://icebreaker-api-us13.onrender.com/api/v1/questions)
- [`GET /api/v1/questions/random`](https://icebreaker-api-us13.onrender.com/api/v1/questions/random)
- [`GET /api/v1/questions/fun`](https://icebreaker-api-us13.onrender.com/api/v1/questions/fun)
- [`GET /api/v1/questions/fun/random`](https://icebreaker-api-us13.onrender.com/api/v1/questions/fun/random)

---

## API Docs (Swagger)

→ [https://icebreaker-api-us13.onrender.com/docs](https://icebreaker-api-us13.onrender.com/docs)

---

## License

MIT
