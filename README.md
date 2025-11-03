# R12 Coliving Web Application

A modern web application built with Next.js, TypeScript, and cutting-edge tools.

## Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd r12Coliving-Web
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Copy the environment variables:
```bash
cp .env.example .env.local
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/              # Next.js app router pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   └── ...
├── hooks/           # Custom React hooks
├── lib/             # Utility functions and configurations
├── store/           # Zustand stores
├── types/           # TypeScript type definitions
└── utils/           # Helper functions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## Adding shadcn/ui Components

This project uses shadcn/ui for UI components. To add a new component:

```bash
npx shadcn-ui@latest add button
npx shadcn-ui@latest add card
# etc.
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Zustand Documentation](https://docs.pmnd.rs/zustand)
- [TanStack Query Documentation](https://tanstack.com/query/latest/docs/react/overview)