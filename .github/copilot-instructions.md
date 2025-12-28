# Chega Mais - Copilot Instructions

## Architecture Overview

This is a **Next.js 16** (App Router) application for creating and managing event invitations. Built with TypeScript, Tailwind CSS v4, and Portuguese as the primary language.

**Stack:**
- Database: Turso (libSQL) via Drizzle ORM
- Auth: Better Auth with email/password
- Validation: Zod with React Hook Form
- UI: Custom components using Radix UI primitives
- Styling: Tailwind CSS v4 + class-variance-authority
- Linting/Formatting: Biome (NOT ESLint/Prettier)

## Database Architecture

- **Schema location:** `src/database/schema/` (modular: `auth.ts`, `invitation.ts`)
- **Connection:** `src/database/index.ts` exports `db` instance
- **Tables:** `user`, `session`, `account`, `verification`, `invitation`
- **Relations:** Drizzle relations defined in schema files (e.g., `userRelations`, `invitationRelations`)
- **Primary keys:** `cuid2` for invitations, Better Auth handles auth table IDs
- **Migrations:** Run `pnpm db:generate` then `pnpm db:migrate`

## Authentication

Better Auth integration at `src/lib/auth.ts` and `src/lib/auth-client.ts`:
- Server: Use `auth` instance from `@/lib/auth`
- Client: Use `authClient` from `@/lib/auth-client`
- Route handler: `src/app/api/auth/[...all]/route.ts` handles all auth endpoints
- Email verification is **disabled** (`requireEmailVerification: false`)
- Session management via cookies (nextCookies plugin)

Example sign-in pattern:
```tsx
await authClient.signIn.email({ email, password }, {
  onSuccess: () => router.push('/dashboard'),
  onError: (ctx) => { /* handle ctx.error.code */ }
})
```

## Code Conventions

### Forms
- Always use `react-hook-form` + `@hookform/resolvers/zod`
- Create Zod schema first, infer type: `type FormData = z.infer<typeof schema>`
- Portuguese validation messages: `z.email('Endereço de e-mail inválido')`
- Display errors via `<ErrorMessage error={errors.fieldName} />`
- See [src/app/(auth)/sign-in/_components/sign-in-form.tsx](src/app/(auth)/sign-in/_components/sign-in-form.tsx) for reference

### UI Components
- Location: `src/components/ui/` for reusable components
- Button variants via `cva` from class-variance-authority
- Use `cn()` utility from `@/lib/utils.ts` to merge Tailwind classes
- Composition pattern: `asChild` prop with Radix Slot
- Example: [src/components/ui/button.tsx](src/components/ui/button.tsx)

### Styling
- **Tailwind CSS v4** with PostCSS
- Custom utility: `cn()` merges class names via clsx + tailwind-merge
- Typography: Outfit font loaded via `next/font/google`
- Notifications: `react-hot-toast` positioned at `top-center`

### Code Quality
- Use **Biome** for linting and formatting (run `pnpm lint` or `pnpm format`)
- JavaScript settings: single quotes, optional semicolons, arrow parens as needed
- Indent: 2 spaces
- No ESLint/Prettier config in this project

### Routing & Layouts
- Route groups: `(auth)` for sign-in/sign-up, `/dashboard` for protected routes
- Server actions: Files named `actions.ts` with `'use server'` directive
- File structure: `_components/` folder for route-specific components

### Internationalization
- **Portuguese (pt-BR)** is the primary language
- HTML lang: `pt-BR` in [src/app/layout.tsx](src/app/layout.tsx)
- All UI text, validation messages, and user-facing content in Portuguese

## Development Workflow

```bash
pnpm dev              # Start dev server (http://localhost:3000)
pnpm build            # Production build
pnpm lint             # Run Biome linter
pnpm format           # Auto-format with Biome
pnpm db:generate      # Generate migrations
pnpm db:migrate       # Run migrations
pnpm db:studio        # Open Drizzle Studio
```

## Key Files Reference

- Auth server: [src/lib/auth.ts](src/lib/auth.ts)
- Auth client: [src/lib/auth-client.ts](src/lib/auth-client.ts)
- DB instance: [src/database/index.ts](src/database/index.ts)
- Schema: [src/database/schema/index.ts](src/database/schema/index.ts)
- Main layout: [src/app/layout.tsx](src/app/layout.tsx)
- Form example: [src/app/dashboard/invite/new/_components/add-invitation-form.tsx](src/app/dashboard/invite/new/_components/add-invitation-form.tsx)
