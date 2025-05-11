// --- Helper Functions ---
function strify(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2') // Handle camelCase to space
    .replace(/[^a-zA-Z0-9]+/g, ' ')     // Replace non-alphanumeric with space
    .trim()
    .split(/\s+/)                       // Split by spaces
    .map(w => w.toLowerCase());          // Convert to lowercase
}
// --- Case Functions ---
function toSpongebobCase(str) {
  return str
    .split('')
    .map((ch, i) => (i % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase())) // Alternate case starting with lowercase
    .join('');
}

function toMixedCase(str) {
  return str
    .split('')
    .map((ch, i) => (i % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase())) // Alternate case starting with lowercase
    .join('');
}


function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize first letter
}

// --- Case Functions ---
function toSnakeCase(str) {
  return strify(str).join('_');
}

function toScreamingSnakeCase(str) {
  return strify(str).join('_').toUpperCase();
}

function toLowerCase(str) {
  return strify(str).join('').toLowerCase(); // Convert entire string to lowercase
}

function toUpperCase(str) {
  return strify(str).join('').toUpperCase(); // Convert entire string to uppercase
}

function toCamelCase(str) {
  const [first, ...rest] = strify(str);
  return first + rest.map(capitalize).join('');
}

function toCamelSnakeCase(str) {
  return toCamelCase(str).replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase(); // Convert camelCase to camel_snake_case
}

function toKebabCase(str) {
  return strify(str).join('-');
}

function toScreamingKebabCase(str) {
  return strify(str).join('-').toUpperCase();
}


function toPascalCase(str) {
  return strify(str).map(capitalize).join('');
}

function toTrainCase(str) {
  return strify(str).map(capitalize).join('-'); // Capitalized words separated by hyphens
}

function toTitleCase(str) {
  return strify(str).map(capitalize).join(' '); // Capitalize words with spaces
}

function toDotNotation(str) {
  return strify(str).join('.'); // Words joined by dot
}

function toPathCase(str) {
  return strify(str).join('/'); // Words joined by slash
}

function toSlugCase(str) {
  return strify(str).join('-'); // Slug format, words joined by hyphen
}


function toNoSpaces(str) {
  return str.replace(/\s+/g, ''); // Remove all spaces
}

function toHumanReadable(str) {
  return strify(str).map(capitalize).join(' '); // Capitalize each word for readability
}

function toReverseCase(str) {
  return str
    .split('')
    .map(ch => (ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase())) // Flip case for each character
    .join('');
}

// Export functions for use in other files
module.exports = {
  toSnakeCase,
  toScreamingSnakeCase,
  toLowerCase,
  toUpperCase,
  toCamelCase,
  toCamelSnakeCase,
  toKebabCase,
  toScreamingKebabCase,
  toSpongebobCase,
  toPascalCase,
  toTrainCase,
  toTitleCase,
  toSentenceCase,
  toDotNotation,
  toPathCase,
  toSlugCase,
  toMixedCase,
  toNoSpaces,
  toHumanReadable,
  toReverseCase
};

