module.exports = {
  printWidth: 80, // Longitud máxima de línea
  tabWidth: 2, // Tamaño de sangría con espacios
  useTabs: false, // No usar tabs para sangría
  semi: true, // Punto y coma al final de las sentencias
  singleQuote: true, // Usar comillas simples en lugar de dobles
  quoteProps: 'as-needed', // Solo añadir comillas a propiedades de objetos cuando sea necesario
  jsxSingleQuote: false, // Usar comillas dobles en JSX
  trailingComma: 'all', // Comas finales donde sea válido
  bracketSpacing: true, // Espacios entre llaves en objetos literales
  bracketSameLine: false, // Colocar el `>` de cierre de JSX en una nueva línea
  arrowParens: 'always', // Incluir paréntesis alrededor de un único parámetro de arrow function
  endOfLine: 'lf', // Usar salto de línea estilo Unix
  embeddedLanguageFormatting: 'auto', // Formatear código embebido (como CSS-in-JS)
  singleAttributePerLine: false, // No forzar atributos de JSX en líneas separadas
  plugins: ['prettier-plugin-tailwindcss'],
};
