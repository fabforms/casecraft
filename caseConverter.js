function toWords(str) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_\-.]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase()
    .split(' ');
}

function toCamelCase(str) {
  const words = toWords(str);
  return words[0] + words.slice(1).map(capitalize).join('');
}

function toPascalCase(str) {
  return toWords(str).map(capitalize).join('');
}

function toSnakeCase(str) {
  return toWords(str).join('_');
}

function toUpperSnakeCase(str) {
  return toWords(str).join('_').toUpperCase();
}

function toKebabCase(str) {
  return toWords(str).join('-');
}

function toDotCase(str) {
  return toWords(str).join('.');
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

module.exports = {
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toUpperSnakeCase,
  toKebabCase,
  toDotCase
};

