---
to: <%= h.pathToType('packages') %>/<%= name %>/__tests__/index.test.ts
---

// basic test for coverage purposes
describe('@--> Basic test', () => {
  it('Returns `true`', () => {
    expect(true).toEqual(true);
  });
});
