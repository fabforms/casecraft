	const assert = require('assert');
const casecraft = require('./index');  // Ensure this points to your index.js or correct file

// Test cases
const tests = [
  {
    method: 'toSnakeCase',
    input: 'HelloWorld',
    expected: 'hello_world',
  },
  {
    method: 'toScreamingSnakeCase',
    input: 'HelloWorld',
    expected: 'HELLO_WORLD',
  },
  {
    method: 'toLowerCase',
    input: 'HelloWorld',
    expected: 'helloworld',
  },
  {
    method: 'toUpperCase',
    input: 'HelloWorld',
    expected: 'HELLOWORLD',
  },
  {
    method: 'toCamelCase',
    input: 'hello_world',
    expected: 'helloWorld',
  },
  {
    method: 'toCamelSnakeCase',
    input: 'helloWorld',
    expected: 'hello_world',
  },
  {
    method: 'toKebabCase',
    input: 'HelloWorld',
    expected: 'hello-world',
  },
  {
    method: 'toScreamingKebabCase',
    input: 'HelloWorld',
    expected: 'HELLO-WORLD',
  },
  {
    method: 'toSpongebobCase',
    input: 'hello_world',
    expected: 'HeLlO_WoRlD',
  },
  {
    method: 'toPascalCase',
    input: 'hello_world',
    expected: 'HelloWorld',
  },
  {
    method: 'toTrainCase',
    input: 'hello_world',
    expected: 'Hello-World',
  },
  {
    method: 'toTitleCase',
    input: 'hello_world',
    expected: 'Hello World',
  },
  {
    method: 'toDotNotation',
    input: 'hello_world',
    expected: 'hello.world',
  },
  {
    method: 'toPathCase',
    input: 'hello_world',
    expected: 'hello/world',
  },
  {
    method: 'toSlugCase',
    input: 'hello_world',
    expected: 'hello-world',
  },
  {
    method: 'toMixedCase',
    input: 'hello_world',
    expected: 'HeLlO_wOrLd',
  },
  {
    method: 'toNoSpaces',
    input: 'hello world',
    expected: 'helloworld',
  },
  {
    method: 'toHumanReadable',
    input: 'hello_world',
    expected: 'Hello World',
  },
  {
    method: 'toReverseCase',
    input: 'HelloWorld',
    expected: 'hELLOwORLD',
  },
];

// Run tests
tests.forEach(test => {
  try {
    const result = casecraft[test.method](test.input);
    assert.strictEqual(result, test.expected);
    console.log(`${test.method} passed!`);
  } catch (error) {
    console.error(`${test.method} failed: Expected "${test.expected}", got "${casecraft[test.method](test.input)}"`);
  }
});

