# Project Context - Polyglot Cards

## Architecture & Conventions

### Next.js Middleware/Proxy
- **Critical:** In Next.js 16+, the standard `middleware.ts` filename is deprecated in favor of `proxy.ts`. 
- **Rule:** Use `apps/web/src/proxy.ts` for all request intercepting, authentication checks, and locale routing logic. Do NOT rename this file to `middleware.ts`.

### Authentication
- Using NextAuth v5 (Beta).
- **Mandatory:** E2E tests must perform real authentication (registration/login). `SKIP_AUTH` is disabled for quality assurance.

### Internationalization (i18n)
- Locale-based routing: `/[locale]/...`
- Supported locales: `vi`, `en`, `ja`.
