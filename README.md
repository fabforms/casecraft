# 🧰 casecraft

**casecraft** is a lightweight utility that converts strings between common naming
conventions like `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, and more.
It helps developers maintain consistent naming across codebases, APIs, databases,
and user-facing content.

> Good naming is fundamental to clean code. `casecraft` ensures your naming follows
> the right conventions for the right contexts — automatically.

---

## 📦 Installation

```bash
npm install casecraft
```

---

## 🚀 Usage

Import and use `casecraft` to convert strings:

```js
import {
  toCamelCase,
  toSnakeCase,
  toKebabCase
} from 'casecraft';

toCamelCase('user_profile_data');
// → userProfileData

toSnakeCase('userProfileData');
// → user_profile_data

toKebabCase('GetUserInfo');
// → get-user-info
```

---

## 🔤 Supported Naming Conventions

- **camelCase**  
  From: `user_profile_data`  
  To: `userProfileData`  
  Usage: JS variables, functions, internals

- **PascalCase**  
  From: `get-user-info`  
  To: `GetUserInfo`  
  Usage: Class names, components, constructors

- **snake_case**  
  From: `userNameIsJohnDoe`  
  To: `user_name_is_john_doe`  
  Usage: Databases, file names, Python/Ruby

- **kebab-case**  
  From: `getUserProfileData`  
  To: `get-user-profile-data`  
  Usage: URLs, CSS class names

- **dot.case**  
  From: `getUserDataFromDatabase`  
  To: `get.user.data.from.database`  
  Usage: Config keys, settings

- **SCREAMING_SNAKE_CASE**  
  From: `sessionTimeoutWarning`  
  To: `SESSION_TIMEOUT_WARNING`  
  Usage: Constants, env variables

- **lowercase**  
  From: `HELLO_WORLD`  
  To: `hello_world`  
  Usage: File systems, normalization

- **UPPERCASE**  
  From: `helloWorld123`  
  To: `HELLOWORLD123`  
  Usage: Constants, emphasis

- **Title Case**  
  From: `this is a title case string`  
  To: `This Is A Title Case String`  
  Usage: Headings, labels

- **Train-Case**  
  From: `user-login-data`  
  To: `User-Login-Data`  
  Usage: URLs, titles

- **path/case**  
  From: `user.profile.image`  
  To: `user/profile/image`  
  Usage: File paths, folders

- **slug-case**  
  From: `A Great Day in the City!`  
  To: `a-great-day-in-the-city`  
  Usage: Slugs, SEO URLs

- **noSpaces**  
  From: `No Spaces Allowed!`  
  To: `noSpacesAllowed`  
  Usage: Compact identifiers

- **human-readable**  
  From: `this_is_a_cool_example`  
  To: `This is a cool example`  
  Usage: UI labels, plain text

---

## 💡 Why Naming Conventions Matter

Consistent naming:

- Improves **readability**
- Reduces **team friction**
- Follows **language best practices**
- Enhances **cross-system integration**
- Simplifies **debugging and maintenance**

`casecraft` lets you focus on clean code, not tedious string formatting.

---

## 📚 Documentation

See the full API and tools in the [GitHub repo](https://github.com/fabforms/casecraft).

---

## 🔗 Links

- GitHub: [fabforms/casecraft](https://github.com/fabforms/casecraft)  
- NPM: [casecraft on NPM](https://www.npmjs.com/package/casecraft)

---

## 💬 Community

We welcome issues, pull requests, and feedback.  
Join us on GitHub!

---

## 🛠️ Contributing

1. Fork the repo  
2. Create a new branch  
3. Make your changes  
4. Open a pull request

Please follow conventional commits and include docs/tests where helpful.

---

## 💖 Sponsored by [FabForm.io](https://fabform.io)

**FabForm.io** helps you build, manage, and process forms with ease.

- Built for JAMstack, static sites, and modern apps  
- Handles submissions, spam filtering, and notifications  
- Just connect your form and go — no backend needed

👉 Try it at [FabForm.io](https://fabform.io)
````

