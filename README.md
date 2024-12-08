## ▶️ Demo

https://morpho-explorer.vercel.app/

## 📝 Todo & Improvements

+ UI:
    + Sync Radix theme with Morpho design spec to achieve fully pixel-perfect solution
    + Add styled-components instead of css modules to improve styling and reusability
    + Move common UI components to shared lib with Storybook
 
+ UX:
    + Sync search state with URL querystring
    + Handle more states and corner cases
    + Optimization for mobile
 
+ Testing:
    + Add unit tests for helpers
    + Add e2e tests with cypress or playwright to cover user-flows
    + Test accessibility
 
+ CI/CD:
    + Optimize next config for production
    + Add linter, formatter check for commits via github piplines
    + Add precommit hooks to local check
    + Add check for commit messages
 
+ Security:
    + Add CSP headers
    + Add signing commits verification
    + Add package monitoring with Snyk
 
+ Monitoring:
    + Add Sentry to catch and log global errors 

## 💻 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🧐 Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- Radix UI: https://www.radix-ui.com/themes/docs/overview/getting-started 
- React query: https://tanstack.com/query/v5/docs/framework/react/overview
- Transtak forms: https://tanstack.com/form/latest/docs/overview
- Viem: https://viem.sh/docs/getting-started
