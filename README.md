This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

### run on local

Clone the code and then run the development server:

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

