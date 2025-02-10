# penumbra-blockchain-explorer

[![codecov](https://codecov.io/github/stpch/penumbra-blockchain-explorer/graph/badge.svg?token=49WLYIAGYH)](https://codecov.io/github/stpch/penumbra-blockchain-explorer)

PK Labs frontend developer onboarding task.

## Getting started

1. Make sure Node.js 22.x development is set up.
2. Install dependencies with  `npm install`.
3. Start the app with `npm run dev`.

Or check out the deployed version at
<https://penumbra-blockchain-explorer-426149560589.europe-west6.run.app/>.

### npm scripts

| Script                      | Description                                   |
|-----------------------------|-----------------------------------------------|
| `npm run dev`               | Run app in development environment.           |
| `npm test`                  | Run tests.                                    |
| `npm run test:coverage`     | Run with coverage report to console and file. |
| `npm run test:codegen`      | Generate block and transaction fixtures.      |
| `npm run test:watch`        | Run tests in watch mode.                      |
| `npm run lint`              | Lint JavaScript with ESLint.                  |
| `npm run lint:fix`          | Lint and fix JavaScript with ESLint.          |
| `npm run stylelint`         | Lint CSS with Stylelint.                      |
| `npm run stylelint:fix`     | Fix and fix CSS with Stylelint.               |
| `npm run typecheck`         | Check TypeScript code.                        |
| `npm run build`             | Build app for deployment.                     |
| `npm start`                 | Runn app in deployment environment.           |

### Project structure

| Directory                    | Description                                                           |
|------------------------------|-----------------------------------------------------------------------|
| `src/__tests__`              | Global test configuration.                                            |
| `src/__tests__/__fixtures__` | Block and transaction fixtures generated with `npm run test:codegen`. |
| `src/app`                    | Next.js app router with layouts and pages.                            |
| `src/components`             | Components used by layouts and pages.                                 |
| `src/lib`                    | Logic, helpers, types, assets, etc. used across the app.              |
| `public`                     | Static public assets accessible through the browser.                  |

## Components, CSS and fonts

The UI and theme replicate the provided [Figma mocks](https://bit.ly/3WRV2bK) as close as possible.
All components are built from scratch as <https://github.com/penumbra-zone/web> and
<https://ui.penumbra.zone/> don't seem to provide fitting ones for this task.

The project uses CSS modules with the global CSS and theme at `src/lib/css`. It uses modern CSS with
variables, flex, grid, animations, etc. Most component styles can be overridden by passing
`classNames`.  PostCSS plugins add additional features such as normalizing and nesting. Tailwind was
considered but ultimately I went for this approach as I haven't used Tailwind in a while.

The `Poppins` and `Work Sans` fonts are loaded with `next/font/google` whereas `Iosevka` is built
from source and loaded with `next/font/local` from `src/lib/fonts`.

## Linting

TypeScript is linted and autoformatted with ESLint and Prettier and mimicks the configuration
at <https://github.com/penumbra-zone/web>. CSS is linted and autoformatted with Stylelint.

## Testing

Jest tests are collocated with the components. Global test configuration and npm module mocks reside
in `src/__tests__`. Test coverage can be reported to console and written to file with
`npm run test:coverage`.

## CI/CD

On push, the GitHub Actions workflow `.github/workflows/gpc.yaml` is triggered. It first runs all
checks (linting, typechecking, testing) and uploads a test coverage report to Codecov with a badge
displayed in this README. Then it triggers a Google Cloud Build which deploys the app to Google
Cloud Run at <https://penumbra-blockchain-explorer-426149560589.europe-west6.run.app/>.

## What's missing

Due to time constraints the following things didn't make it:

- Some block and transaction view details
- Table pagination
- Interactive search input with popover



