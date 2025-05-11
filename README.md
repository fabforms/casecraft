
# 🧰 **casecraft**

**casecraft** is a lightweight utility for converting strings between common naming conventions like `camelCase`, `PascalCase`, `snake_case`, `kebab-case`, and `dot.case`. It helps you easily adapt your code to different coding styles and ensures consistency across your project.

## 📦 **Installation**

```bash
npm install casecraft
````

## 🚀 **Usage**

Here are some examples of how you can convert strings between different naming conventions:

### **Camel Case** (`camelCase`)

Converts a string to **camelCase**.

**Example:**

```
user_profile_data → userProfileData
```

**Best Used For:**

* **JavaScript functions or methods**: Typically used for variable names, function names, and methods in JavaScript.
* **Use case**: When working with JavaScript code that interacts with APIs or components, camelCase is preferred for consistency.

---

### **Pascal Case** (`PascalCase`)

Converts a string to **PascalCase**.

**Example:**

```
get-user-info → GetUserInfo
```

**Best Used For:**

* **Class names and React components**: Commonly used for naming classes, components in frameworks like React, or any type of constructor functions.
* **Use case**: When creating reusable components or classes in JavaScript, especially in object-oriented programming or when working with component-based frameworks.

---

### **Snake Case** (`snake_case`)

Converts a string to **snake\_case**.

**Example:**

```
userNameIsJohnDoe → user_name_is_john_doe
```

**Best Used For:**

* **Databases and file names**: Frequently used in database columns and file names, especially in Python and Ruby.
* **Use case**: When working with databases, especially SQL-based systems, snake\_case is often the convention for naming tables and columns.

---

### **Kebab Case** (`kebab-case`)

Converts a string to **kebab-case**.

**Example:**

```
getUserProfileData → get-user-profile-data
```

**Best Used For:**

* **URLs and CSS classes**: Typically used for naming URLs, file paths, and CSS class names.
* **Use case**: When working with URLs or CSS, kebab-case is the standard for easy readability and SEO-friendly URLs.

---

### **Dot Case** (`dot.case`)

Converts a string to **dot.case**.

**Example:**

```
getUserDataFromDatabase → get.user.data.from.database
```

**Best Used For:**

* **Object property paths or configuration files**: Useful for representing paths in objects or when working with nested configuration values.
* **Use case**: Often used in JavaScript object paths, or when accessing deep object properties in JavaScript or JSON.

---

### **Screaming Snake Case** (`SCREAMING_SNAKE_CASE`)

Converts a string to **Screaming\_Snake\_CASE**.

**Example:**

```
sessionTimeoutWarning → SESSION_TIMEOUT_WARNING
```

**Best Used For:**

* **Constants and environment variables**: Commonly used for constants, configuration values, and environment variables.
* **Use case**: When declaring global constants, or environment variables in JavaScript or server-side environments.

---

### **Lowercase** (`lowercase`)

Converts a string to **lowercase** (no spaces).

**Example:**

```
HELLO_WORLD → hello_world
```

**Best Used For:**

* **File names and case-insensitive systems**: Used when you need all characters in lowercase to avoid issues with case sensitivity in systems like Linux.
* **Use case**: When working with file systems that are case-insensitive or when filenames need to be consistently lowercase.

---

### **Uppercase** (`UPPERCASE`)

Converts a string to **UPPERCASE** (no spaces).

**Example:**

```
helloWorld123 → HELLOWORLD123
```

**Best Used For:**

* **Shouting or Constants**: Typically used for shouting messages or representing constant values.
* **Use case**: When declaring constants or for emphasizing specific messages in output.

---

### **Camel Snake Case** (`camel_snake_case`)

Combines camelCase and snake\_case.

**Example:**

```
example_test_case_here → example_test_case_here
```

**Best Used For:**

* **Special cases where you need a combination of camel and snake styles**: Useful when you want to ensure readability while combining different cases.
* **Use case**: In legacy systems or codebases where both camelCase and snake\_case are used for different purposes.

---

### **Spongebob Case** (`sPonGeBoB CaSe`)

Converts a string to **Spongebob case** (alternating lowercase/uppercase).

**Example:**

```
helloWorld → HeLlOwOrLd
```

**Best Used For:**

* **Novelty and fun text**: Great for memes or humorous text representations.
* **Use case**: For fun effects or to add a humorous twist to strings in UI elements, social media posts, or creative designs.

---

### **Train Case** (`Train-Case`)

Converts a string to **Train-Case** (capitalized kebab case).

**Example:**

```
user-login-data → User-Login-Data
```

**Best Used For:**

* **Readable URLs**: Often used for clearer, capitalized URLs or hierarchical paths.
* **Use case**: When working with paths or filenames that need to be readable and look professional, such as in URLs.

---

### **Title Case** (`Title Case`)

Converts a string to **Title Case** (capitalizing the first letter of each word).

**Example:**

```
this is a title case string → This Is A Title Case String
```

**Best Used For:**

* **Headings and titles**: Ideal for book titles, article headings, or any other place where you want the first letter of each word capitalized.
* **Use case**: When formatting article titles, post titles, or headers on a website to make them stand out.

---

### **Path Case** (`path/case`)

Converts a string to **path/case** (useful for paths and URLs).

**Example:**

```
user.profile.image → user/profile/image
```

**Best Used For:**

* **File paths and URLs**: Useful for constructing paths in URLs or file systems.
* **Use case**: When constructing file paths, hierarchical URLs, or directory structures.

---

### **Slug Case** (`slug-case`)

Converts a string to **slug-case** (kebab case for URLs).

**Example:**

```
A Great Day in the City! → a-great-day-in-the-city
```

**Best Used For:**

* **SEO-friendly URLs**: Converts strings to lowercase with hyphens separating words, making them easy to read and SEO-friendly.
* **Use case**: When generating slugs for blog posts, articles, or other web content that will be used in URLs.

---

### **Mixed Case** (`mixedCase`)

Converts a string to **mixedCase** (alternating lowercase/uppercase).

**Example:**

```
here is A funkyExample String → HeRe Is A FuNkYExAmPlE StRiNg
```

**Best Used For:**

* **Creative and playful text styles**: Ideal for adding creative, fun effects to text.
* **Use case**: When displaying quirky or unconventional string formats in social media, design elements, or playful applications.

---

### **No Spaces** (`noSpaces`)

Converts a string to **noSpaces** (all characters concatenated).

**Example:**

```
No Spaces Allowed! → noSpacesAllowed
```

**Best Used For:**

* **Identifiers and variable names**: Useful for removing spaces in variable names, identifiers, and other programmatic strings.
* **Use case**: When you need a single, continuous string without spaces, often used in JavaScript and other programming languages.

---

### **Human Readable** (`human-readable`)

Converts a string to **human-readable format** (properly capitalized words).

**Example:**

```
this_is_a_cool_example → This is a cool example
```

**Best Used For:**

* **User-facing strings**: Converts strings into formats that are easy to read and understand.
* **Use case**: For display strings that need to be presented to users in a readable, user-friendly format.

---

### **Reverse Case** (`reverse-case`)

Converts a string to **reverse case** (all uppercase becomes lowercase and vice versa).

**Example:**

```
HelloWorld → hELLOwORLD
```

**Best Used For:**

* **Special formatting effects**: Useful for creating text effects, special formats, or when you need to reverse the case for visual effects.
* **Use case**: When you need to generate text effects or for specific formatting tasks that require a case inversion.

---

## 📚 **Links**

* [GitHub Repository](https://github.com/fabforms/casecraft)
* [NPM Package](https://www.npmjs.com/package/casecraft)

---

## 💬 **Community**

Feel free to contribute, open issues, or ask questions. We’d love to have your feedback!

---

## 🛠️ **Contributing**

If you want to contribute, please follow the standard fork-and-pull request workflow. All contributions are welcome.

---

## 💖 **Sponsored by [FabForm.io](https://fabform.io)**

FabForm.io is the easiest way to build and manage forms for your applications. With powerful features, customizations, and seamless integration, it's the perfect tool for form handling. Check them out at [FabForm.io](https://fabform.io) for more information!

```

```

