Absolutely — here is the **complete, polished `README.md`** file for your JavaScript string case conversion library **`casecraft`**, ready for GitHub and NPM:

---

````markdown
# 🧰 casecraft

**casecraft** is a lightweight and expressive utility for converting strings between popular naming conventions like `camelCase`, `PascalCase`, `snake_case`, `UPPER_SNAKE_CASE`, `kebab-case`, and `dot.case`.

Whether you're building tools, cleaning up API responses, writing code generators, or building a form engine — **casecraft** makes working with string cases effortless and consistent.

---

## 📦 Installation

```bash
npm install casecraft
````

---

## ✨ Features

* 🔁 Convert between all major string case formats
* 🧠 Smart parsing of mixed and irregular input
* 💡 Simple, intuitive API
* ⚡ No external dependencies
* 🌐 Works with Node.js and modern bundlers (Webpack, Vite, etc.)

---

## 🚀 Usage

```js
const casecraft = require('casecraft');

const input = 'example_input-string.TestValue';

console.log(casecraft.toCamelCase(input));       // exampleInputStringTestValue
console.log(casecraft.toPascalCase(input));      // ExampleInputStringTestValue
console.log(casecraft.toSnakeCase(input));       // example_input_string_test_value
console.log(casecraft.toUpperSnakeCase(input));  // EXAMPLE_INPUT_STRING_TEST_VALUE
console.log(casecraft.toKebabCase(input));       // example-input-string-test-value
console.log(casecraft.toDotCase(input));         // example.input.string.test.value
```

---

## 🔧 API

All functions accept a `string` and return a transformed string:

### `toCamelCase(str)`

Converts to `camelCase`.
Example: `user_name` → `userName`

---

### `toPascalCase(str)`

Converts to `PascalCase`.
Example: `user_name` → `UserName`

---

### `toSnakeCase(str)`

Converts to `snake_case`.
Example: `userName` → `user_name`

---

### `toUpperSnakeCase(str)`

Converts to `UPPER_SNAKE_CASE`.
Example: `userName` → `USER_NAME`

---

### `toKebabCase(str)`

Converts to `kebab-case`.
Example: `userName` → `user-name`

---

### `toDotCase(str)`

Converts to `dot.case`.
Example: `userName` → `user.name`

---

## 🧪 Test Locally

Create a `test.js` file like this:

```js
const cc = require('./caseConverter');

console.log(cc.toCamelCase('user_name'));      // userName
console.log(cc.toPascalCase('user_name'));     // UserName
console.log(cc.toSnakeCase('userName'));       // user_name
console.log(cc.toKebabCase('UserName'));       // user-name
console.log(cc.toUpperSnakeCase('user-name')); // USER_NAME
console.log(cc.toDotCase('UserName'));         // user.name
```

Then run:

```bash
node test.js
```

---

## 📂 Directory Structure

```
casecraft/
├── caseConverter.js     # Core library
├── test.js              # Example usage
├── package.json
└── README.md
```

---

## 📄 License

MIT © \[Your Name]

---

## 🌐 Links

* [NPM Package](https://www.npmjs.com/package/casecraft)
* [GitHub Repository](https://github.com/yourusername/casecraft)
* [Issues](https://github.com/yourusername/casecraft/issues)

---

## 🤝 Contributing

Pull requests and feature suggestions are welcome!
Please open an issue to discuss what you'd like to change.

---

## 🙌 Acknowledgements

This project was built to save time and headaches when dealing with naming conventions across various systems and formats.

---

```

Let me know if you'd like a logo, badges (npm version, downloads, etc.), or TypeScript support section added!
```

