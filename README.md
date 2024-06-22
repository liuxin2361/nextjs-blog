This project is a personal initiative for learning and exploration and <mark><big>Not finished yet, still under development<big><mark>.

## Introduction

![Next.js](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=for-the-badge)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)

A simple personal blog website developed using Next.js, React 18, TypeScript, Shadcn/ui, and Tailwind CSS.

## Getting Started

Ensure You Have Installed

- Git
- Node.js >= 18
- PostgreSQL 16

### clone the code

```bash
git clone git@github.com:liuxin2361/nextjs-blog.git
```

### install the dependencies

```bash
npm install
```

### Prepare env files and set database connection information

1. Create database
2. Create a new .env file
3. Set `DATABASE_URL` in the .env file.
4. Use `/scripts/init.sql` to create tables and insert data.
5. Run the following command to introspect your database:

   ```bash
   npx prisma db push
   ```

6. Generate Prisma Client

   ```bash
   npx prisma generate
   ```

### run the application

```bash
npm run dev
```

### run the application with docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine

### run on local

run the development server

```bash
npm run dev
```

### run with docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine
2. Clone the code
3. Build your container:

```bash
docker build -t nextjs-blog .
```

4. Run your container:

```bash
docker run -p 3000:3000 nextjs-blog
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.
