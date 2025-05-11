Apologies for missing the sponsorship section! Here's the corrected version of the `README.md` file with the sponsorship section added at the bottom:

````markdown
# 🧰 casecraft

**casecraft** is a lightweight utility for converting strings between common naming conventions like `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, and `dot.case`. This library helps you easily adapt your code to different coding styles and ensures consistency across your project.

## 📦 Installation

```bash
npm install casecraft
````

## 🚀 Usage

Import the library and convert between different cases with these examples:

```js
const casecraft = require('casecraft');

console.log(casecraft.toCamelCase('user_profile_data')); // userProfileData
console.log(casecraft.toPascalCase('get-user-info')); // GetUserInfo
console.log(casecraft.toSnakeCase('userNameIsJohnDoe')); // user_name_is_john_doe
console.log(casecraft.toKebabCase('getUserProfileData')); // get-user-profile-data
console.log(casecraft.toDotCase('getUserDataFromDatabase')); // get.user.data.from.database
console.log(casecraft.toScreamingSnakeCase('sessionTimeoutWarning')); // SESSION_TIMEOUT_WARNING
console.log(casecraft.toLowerCase('HELLO_WORLD')); // hello_world
console.log(casecraft.toUpperCase('helloWorld123')); // HELLOWORLD123
console.log(casecraft.toCamelSnakeCase('example_test_case_here')); // example_test_case_here
console.log(casecraft.toScreamingKebabCase('app-config-values')); // APP-CONFIG-VALUES
console.log(casecraft.toSpongebobCase('helloWorld')); // HeLlOwOrLd
console.log(casecraft.toTrainCase('user-login-data')); // User-Login-Data
console.log(casecraft.toTitleCase('this is a title case string')); // This Is A Title Case String
console.log(casecraft.toSentenceCase('this is a sentence case string')); // This is a sentence case string
console.log(casecraft.toPathCase('user.profile.image')); // user/profile/image
console.log(casecraft.toSlugCase('A Great Day in the City!')); // a-great-day-in-the-city
console.log(casecraft.toMixedCase('here is A funkyExample String')); // HeRe Is A FuNkYExAmPlE StRiNg
console.log(casecraft.toNoSpaces('No Spaces Allowed!')); // noSpacesAllowed
console.log(casecraft.toHumanReadable('this_is_a_cool_example')); // This is a cool example
console.log(casecraft.toReverseCase('HelloWorld')); // hELLOwORLD
```

### Available Methods

* `toCamelCase(str)` – Converts string to **camelCase**.
* `toPascalCase(str)` – Converts string to **PascalCase**.
* `toSnakeCase(str)` – Converts string to **snake\_case**.
* `toScreamingSnakeCase(str)` – Converts string to **Screaming\_Snake\_CASE**.
* `toLowerCase(str)` – Converts string to **lowercase** (no spaces).
* `toUpperCase(str)` – Converts string to **UPPERCASE** (no spaces).
* `toCamelSnakeCase(str)` – Converts string to **camel\_case** (camelCase + snake\_case).
* `toKebabCase(str)` – Converts string to **kebab-case**.
* `toScreamingKebabCase(str)` – Converts string to **SCREAMING-KEBAB-CASE**.
* `toSpongebobCase(str)` – Converts string to **Spongebob case** (alternating lowercase/uppercase).
* `toPascalCase(str)` – Converts string to **PascalCase**.
* `toTrainCase(str)` – Converts string to **Train-Case** (capitalized kebab case).
* `toTitleCase(str)` – Converts string to **Title Case** (capitalizing the first letter of each word).
* `toSentenceCase(str)` – Converts string to **Sentence case** (only the first word capitalized).
* `toDotCase(str)` – Converts string to **dot.case**.
* `toPathCase(str)` – Converts string to **path/case** (useful for paths and URLs).
* `toSlugCase(str)` – Converts string to **slug-case** (kebab case for URLs).
* `toMixedCase(str)` – Converts string to **mixedCase** (alternating lowercase/uppercase).
* `toNoSpaces(str)` – Converts string to **no spaces** (all characters concatenated).
* `toHumanReadable(str)` – Converts string to **human-readable format** (properly capitalized words).
* `toReverseCase(str)` – Converts string to **reverse case** (all uppercase becomes lowercase and vice versa).

## 🔧 Case Conventions & Best Practices

### `camelCase`

* **Example**: `parseUserInput`
* **Usage**: Common in JavaScript for function names, variables, and method names.
* **Best Practice**: Use for functions, methods, and local variables in JavaScript to maintain a consistent style.

### `PascalCase`

* **Example**: `UserProfileComponent`
* **Usage**: Frequently used for classes, React components, and constructor functions.
* **Best Practice**: Use for defining class names, components, or other entities that follow a more object-oriented structure.

### `snake_case`

* **Example**: `user_profile_picture`
* **Usage**: Often used in Python, Ruby, and databases. Useful for file names and database columns.
* **Best Practice**: Use for database columns, file names, and external APIs that require this format.

### `Screaming_Snake_CASE`

* **Example**: `MAX_SESSION_TIME`
* **Usage**: Usually used for constants or environment variables.
* **Best Practice**: Use for constants and configuration variables that should not change.

### `kebab-case`

* **Example**: `user-profile-page`
* **Usage**: Primarily used in URLs, CSS classes, and file names.
* **Best Practice**: Use in URLs or for naming CSS classes to avoid issues with case sensitivity in different environments.

### `Spongebob Case`

* **Example**: `ThIs Is A FuN tExT`
* **Usage**: Fun, quirky transformation with alternating upper and lowercase characters.
* **Best Practice**: Use for novelty text, memes, or when you want to make something playful.

### `Train Case`

* **Example**: `User-Account-Settings`
* **Usage**: Useful for creating clear, readable paths and URLs.
* **Best Practice**: Use this for URLs, especially when you want each segment to be capitalized for better readability.

### `Title Case`

* **Example**: `A Quick Guide To Casecraft`
* **Usage**: Ideal for book titles, article headings, or any other place where you want the first letter of each word capitalized.
* **Best Practice**: Use for titles, headings, and display names to make them stand out.

### `Sentence Case`

* **Example**: `This is a sentence case string`
* **Usage**: Best used for normal sentences and body text.
* **Best Practice**: Use for paragraph text, sentence-based outputs, and more readable content.

### `dot.case`

* **Example**: `user.profile.details`
* **Usage**: Common in object paths, or when accessing nested properties.
* **Best Practice**: Use in scenarios where you are working with object keys or for configuration settings.

### `path/case`

* **Example**: `user/profile/details`
* **Usage**: Used for file paths or hierarchical URLs.
* **Best Practice**: Use for file paths, directories, or deep linking when working with URLs.

### `slug-case`

* **Example**: `how-to-create-a-form-builder`
* **Usage**: Great for SEO-friendly URLs, blog posts, and page slugs.
* **Best Practice**: Use for creating readable and SEO-friendly URLs or page slugs.

### `mixedCase`

* **Example**: `hereIsASecretMessage`
* **Usage**: Fun variation of case that combines lowercase and uppercase letters.
* **Best Practice**: Use for creative applications or for scenarios where you want a different style than standard cases.

### `no spaces`

* **Example**: `thisisaverylongstringwithoutspaces`
* **Usage**: Useful when you want to strip spaces from strings, making them suitable for URLs, identifiers, or file names.
* **Best Practice**: Use when spaces in strings would create issues with parsing or naming conventions.

### `human-readable`

* **Example**: `This is a human readable format`
* **Usage**: Converts strings into formats that are easy to read and understand.
* **Best Practice**: Use for user-facing strings and content that needs to be displayed to humans in a readable way.

### `reverse-case`

* **Example**: `hElLoWoRlD`
* **Usage**: Flips all characters to their opposite case.
* **Best Practice**: Use when you want to create a fun effect or need to reverse the case of a string for a specific purpose.

## 📚 Links

* [GitHub Repository](https://github.com/fabforms/casecraft)
* [NPM Package](https://www.npmjs.com/package/casecraft)

## 🔑 NPM Search Keywords

* camelcase
* camel-case
* pascalcase
* pascal-case
* snakecase
* snake\_case
* screaming-snake-case
* screaming-snake-case
* kebabcase
* kebab-case
* dotcase
* dot.case
* pathcase
* path/case
* slugcase
* slug-case
* mixedcase
* mixed-case
* humancase
* sentencecase
* sentence-case
* titlecase
* title-case
* traincase
* train-case
* spongebobcase
* spongebob-case
* nocase
* no-space
* reversecase
* reverse-case
* string-case-conversion
* case-transformer

---

## 💬 Community

Feel free to contribute, open issues, or ask questions. We'd love to have your feedback!

## 🛠️ Contributing

If you want to contribute, please follow the standard fork-and-pull request workflow. All contributions are welcome.

---

## 💸 Sponsorship

If you like **casecraft** and want to support its development, please consider sponsoring the project!

[![Sponsor this project](https://img.shields.io/badge/sponsor-❤️-brightgreen)](https://github.com/sponsors/fabforms)

Thank you for supporting **casecraft**! ❤️

```


## 💼 **Sponsored by FabForm**



Looking for a reliable backend service to manage your forms? [FabForm](https://fabform.io) offers a powerful, secure, and customizable solution for managing form submissions with minimal setup. Save time and effort while ensuring your forms are processed smoothly.

Visit [fabform.io](https://fabform.io) to learn more!

---

