# yajsc-tests

Playwright end-to-end tests 

## Prerequisites

- Node.js (LTS)

## Setup

```bash
npm install
npx playwright install
```

## Running tests

```bash
npm test
```

Other useful variants:

```bash
npx playwright test --ui       # interactive UI mode
npx playwright test --headed   # run with a visible browser
npx playwright test --debug    # step through with the Playwright inspector
```

## Viewing the report

```bash
npx playwright show-report
```

## Project structure

- `tests/` — Playwright spec files
- `playwright.config.ts` — Playwright configuration

## Licence
[MIT](https://choosealicense.com/licenses/mit/)