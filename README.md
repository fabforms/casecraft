
# 🧰 casecraft

**casecraft** is a lightweight utility for converting strings between common naming conventions such as `camelCase`, `PascalCase`, `snake_case`, `UPPER_SNAKE_CASE`, `kebab-case`, and `dot.case`. This library helps you easily adapt your code to different coding styles and ensures consistency across your project.

## 📦 Installation

```bash
npm install casecraft
```

## 🚀 Usage

Import the library and convert between different cases:

```js
const casecraft = require('casecraft');

console.log(casecraft.toCamelCase('example_input-string'));  // exampleInputString
console.log(casecraft.toPascalCase('example_input-string')); // ExampleInputString
console.log(casecraft.toSnakeCase('exampleInputString'));    // example_input_string
console.log(casecraft.toKebabCase('exampleInputString'));    // example-input-string
console.log(casecraft.toDotCase('exampleInputString'));      // example.input.string
```

### Available Methods

* `toCamelCase(str)` – Converts string to **camelCase**.
* `toPascalCase(str)` – Converts string to **PascalCase**.
* `toSnakeCase(str)` – Converts string to **snake\_case**.
* `toUpperSnakeCase(str)` – Converts string to **UPPER\_SNAKE\_CASE**.
* `toKebabCase(str)` – Converts string to **kebab-case**.
* `toDotCase(str)` – Converts string to **dot.case**.

## 🔧 Case Conventions & Best Practices

### `camelCase`

* **Example**: `myVariableName`
* **Usage**: This is the most commonly used case in JavaScript, especially for variable names and function/method names.
* **Best Practice**: Use `camelCase` for local variables, parameters, and function names. It keeps your code clean and consistent with the majority of JavaScript conventions.

### `PascalCase`

* **Example**: `MyClassName`
* **Usage**: Commonly used for class names, constructors, and React component names.
* **Best Practice**: Use `PascalCase` when naming classes or components to help them stand out in your codebase. This makes it easier to differentiate between variables/functions and classes/components.

### `snake_case`

* **Example**: `my_variable_name`
* **Usage**: Often used in databases, file names, and other languages like Python and Ruby.
* **Best Practice**: Use `snake_case` for file names, environment variables, and when working with non-JavaScript languages that follow this convention.

### `UPPER_SNAKE_CASE`

* **Example**: `MY_CONSTANT_VALUE`
* **Usage**: Typically used for constants and environment variables.
* **Best Practice**: Use `UPPER_SNAKE_CASE` for constants, enums, and global variables to indicate that their value should not change during runtime.

### `kebab-case`

* **Example**: `my-variable-name`
* **Usage**: Mainly used for URLs, file names, and CSS class names.
* **Best Practice**: Use `kebab-case` in URLs or for file names to ensure compatibility across different operating systems (some systems are case-sensitive).

### `dot.case`

* **Example**: `my.variable.name`
* **Usage**: Common in object paths, configuration files, or when working with dot notation.
* **Best Practice**: Use `dot.case` for configuration keys or in JSON-like files to keep the names structured and readable.

## 📚 Links

* [GitHub Repository](https://github.com/fabforms/casecraft)
* [NPM Package](https://www.npmjs.com/package/casecraft)

## 🤝 Contributing

Feel free to fork the repo, make changes, and submit a pull request. Issues and feature requests are welcome!

---

## 💼 Sponsored by FabForm

Looking for a reliable backend service to manage your forms? [FabForm](https://fabform.io) offers a powerful, secure, and customizable solution for managing form submissions with minimal setup. Save time and effort while ensuring your forms are processed smoothly.

Visit [fabform.io](https://fabform.io) to learn more!

---

### Keywords (for npm search)

* string-conversion
* case-conversion
* case-utils
* camelcase
* pascalcase
* snakecase
* kebabcase
* dotcase
* js-utils
* javascript-utilities

---


