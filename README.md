# @willsoto/eslint-config-base

> My eslint config

## Installation (Basic)

```bash
yarn add eslint @willsoto/eslint-config-base --dev
```

```bash
npm install eslint @willsoto/eslint-config-base --save-dev
```

## Installation (with Vue.js)

```bash
yarn add eslint-plugin-vue --dev
```

```bash
npm install eslint-plugin-vue --save-dev
```

## Installation (with TypeScript)

```bash
yarn add @typescript-eslint/eslint-plugin --dev
```

```bash
npm install @typescript-eslint/eslint-plugin --save-dev
```

## Usage

### Basic

```json
{
  "extends": ["@willsoto/eslint-config-base"]
}
```

### Vue.js

Everything from `Basic` plus additional Vue.js options

```json
{
  "extends": ["@willsoto/eslint-config-base/vue"]
}
```

### TypeScript

Everything from `Basic` plus additional TypeScript options

```json
{
  "extends": ["@willsoto/eslint-config-base/typescript"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "project": "./tsconfig.json"
  }
}
```
