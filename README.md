````markdown
# 🧰 casecraft

**casecraft** is a lightweight utility that converts strings between common naming conventions like `camelCase`, 
`PascalCase`, `snake_case`, `kebab-case`, and more. It helps developers maintain consistent naming across codebases
, APIs, databases etc.

> Good naming is fundamental to clean code. `casecraft` ensures your naming follows the right conventions for 
the right contexts.

---

## 📦 Installation

```bash
npm install casecraft
````

---

## 🚀 Usage

Import and use `casecraft` to convert strings:

```js
import { toCamelCase, toSnakeCase, toKebabCase } from 'casecraft';

toCamelCase('user_profile_data');     // userProfileData
toSnakeCase('userProfileData');       // user_profile_data
toKebabCase('GetUserInfo');           // get-user-info
```

---

## 🔤 Supported Naming Conventions

Convention             Example Input                 Output Example                Common Use Cases                              

`camelCase`            `user_profile_data`           `userProfileData`             JS variables, functions, internal identifiers 
`PascalCase`           `get-user-info`               `GetUserInfo`                 Class names, React components, constructors   
`snake_case`           `userNameIsJohnDoe`           `user_name_is_john_doe`       Databases, file names, Python/Ruby            
`kebab-case`           `getUserProfileData`          `get-user-profile-data`       URLs, CSS class names                         
`dot.case`             `getUserDataFromDatabase`     `get.user.data.from.database` Nested keys, config paths                     
`SCREAMING_SNAKE_CASE` `sessionTimeoutWarning`       `SESSION_TIMEOUT_WARNING`     Constants, environment variables              
`lowercase`            `HELLO_WORLD`                 `hello_world`                 File systems, normalization                   
`UPPERCASE`            `helloWorld123`               `HELLOWORLD123`               Constants, emphasis                           
`Title Case`           `this is a title case string` `This Is A Title Case String` Headlines, readable labels                    
`Train-Case`           `user-login-data`             `User-Login-Data`             Human-readable URLs, document titles          
`path/case`            `user.profile.image`          `user/profile/image`          Paths, file structures                        
`slug-case`            `A Great Day in the City!`    `a-great-day-in-the-city`     SEO-friendly URLs, slugs                      
`noSpaces`             `No Spaces Allowed!`          `noSpacesAllowed`             Identifiers, filenames, compact representation
`human-readable`       `this_is_a_cool_example`      `This is a cool example`      User-facing text, labels, headings            

---

## 💡 Why Naming Conventions Matter

Consistent naming:

* Enhances **code readability**
* Reduces **developer friction** in team environments
* Follows **language-specific best practices**
* Improves **interoperability** across systems (APIs, databases, UIs)
* Makes **debugging and maintenance** easier

`casecraft` abstracts naming logic so you can focus on what matters — clean, consistent, meaningful code.

---

## 📚 Documentation

Explore the full API and available utilities in the [GitHub repository](https://github.com/fabforms/casecraft).

---

## 🔗 Links

* **GitHub**: [https://github.com/fabforms/casecraft](https://github.com/fabforms/casecraft)
* **NPM**: [https://www.npmjs.com/package/casecraft](https://www.npmjs.com/package/casecraft)

---

## 💬 Community

We welcome contributions, feedback, and bug reports. Please open an issue or submit a pull request on GitHub.

---

## 🛠️ Contributing

To contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Open a pull request

Please follow standard commit practices and ensure your code is well-documented.

---

## 💖 Sponsored by [FabForm.io](https://fabform.io)

**FabForm.io** makes it easy to build, manage, and process forms for your applications. Whether you're working 
on a marketing site, a JAMstack app, or a production dashboard — FabForm handles submissions, spam protection, 
and automation with ease.

👉 Check them out at [FabForm.io](https://fabform.io)

---
