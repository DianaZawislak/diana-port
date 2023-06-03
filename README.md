[![Deploy to Heroku](https://github.com/DianaZawislak/diana-port/actions/workflows/main.yml/badge.svg)](https://github.com/DianaZawislak/diana-port/actions/workflows/main.yml)

This is personal portfolio page built with Next.js. React, sanity, typescript
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

To update deployment:
Currently automated with each sanity update, if automatic deployment fails here are manual commands:
```bash
docker build -t aaaaa .
heroku container:push web -a aportfolio
heroku container:release web -a aportfolio
```


Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

