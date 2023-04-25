---
to: <%= h.pathToType('packages') %>/<%= name %>/package.json 
---

{
  "name": "<%= name %>",
  "version": "0.0.0",
  "type": "module",
  "license": "MIT",
  "scripts": {
    "lint": "TIMING=1 eslint --fix \"**/*.ts*\"",
    "test": "vitest run --dir __tests__",
    "watch": "vitest watch --dir __tests__"
  },
  "devDependencies": {
    "eslint": "^7.32.0",
    "eslint-config-custom": "*",
    "tsconfig": "*",
    "typescript": "^4.5.2"
  }
}

