# Verification

The previous test files were empty scaffolds and have been removed. They did not contain executable tests.

Current checks:

- `npm run typecheck`: TypeScript validation.
- `npm run build`: production compilation and route generation.
- `node scripts/verify-frontend.mjs`: imported content, local assets, internal links and nine workflow examples.

Browser verification covers responsive navigation, product switching, chat opening/closing and layout. Backend answer accuracy and real lead submission require separate integration checks.
