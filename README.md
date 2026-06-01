# API Database Testing Framework

![Playwright Tests](https://github.com/pinkpiglittlebro/api-database-testing-framework/actions/workflows/playwright.yml/badge.svg)

A QA automation project built with Playwright and TypeScript to practice API testing, database validation, Dockerized MySQL environments, and CI/CD workflows.

---

## Tech Stack

- Playwright
- TypeScript
- MySQL
- Docker
- GitHub Actions

---

## Features

### API Testing
- `GET` products
- `GET` product by ID
- `POST` product
- `PUT` product
- `DELETE` product

### Authentication Testing
- Valid login
- Invalid login
- Token validation

### Negative Testing
- Invalid product ID
- Invalid login credentials

### Database Validation
- MySQL database running in Docker
- Schema and seed data setup
- SQL validation using Playwright tests

### CI/CD
- GitHub Actions workflow
- Automated test execution on push and pull request
- Automated database setup in CI

---

##  Project Structure

```text
api-database-testing-framework/
│
├── tests/
│   ├── auth.api.spec.ts
│   ├── db-validation.spec.ts
│   ├── negative.api.spec.ts
│   └── products.api.spec.ts
│
├── database/
│   ├── dbClient.ts
│   ├── schema.sql
│   └── seed.sql
│
├── test-data/
│   └── products.ts
│
├── utils/
│   └── apiClient.ts
│
└── docker-compose.yml
```

---

##  Running the Project

**Install dependencies:**
```bash
npm install
```

**Start MySQL:**
```bash
docker compose up -d
```

**Run tests:**
```bash
npx playwright test
```

**View the report:**
```bash
npx playwright show-report
```

---
