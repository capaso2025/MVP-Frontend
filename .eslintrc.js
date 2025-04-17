module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:promise/recommended",
    "prettier", // Debe ser el último para evitar conflictos
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  plugins: [
    "react",
    "react-hooks",
    "@typescript-eslint",
    "import",
    "jsx-a11y",
    "promise",
    "prettier",
  ],
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.json",
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  rules: {
    // Reglas de React
    "react/react-in-jsx-scope": "off", // No es necesario con React 17+
    "react/prop-types": "off", // Usamos TypeScript para validación de props
    "react/jsx-uses-react": "off", // No es necesario con React 17+
    "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-props-no-spreading": "off", // Permitimos spreading de props en algunos casos
    "react/require-default-props": "off", // TypeScript ya maneja esto

    // Reglas de React Hooks
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",

    // Reglas de TypeScript
    "@typescript-eslint/explicit-module-boundary-types": "off", // Inferencia de tipos es suficiente en muchos casos
    "@typescript-eslint/no-explicit-any": "error", // Prohibir el uso de 'any'
    "@typescript-eslint/no-non-null-assertion": "error", // Prohibir aserciones no nulas (!), mejor manejar undefined
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
      {
        selector: "typeAlias",
        format: ["PascalCase"],
        prefix: ["T"],
      },
      {
        selector: "enum",
        format: ["PascalCase"],
        prefix: ["E"],
      },
    ],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-floating-promises": "error",

    // Reglas de importación
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        pathGroups: [
          {
            pattern: "@/**",
            group: "internal",
            position: "before",
          },
        ],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-default-export": "warn", // Preferimos exportaciones nombradas
    "import/prefer-default-export": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "**/*.test.{ts,tsx}",
          "**/*.spec.{ts,tsx}",
          "**/vite.config.ts",
          "**/*.stories.{ts,tsx}",
          "**/*.config.{js,ts}",
          "**/setupTests.{js,ts}",
        ],
      },
    ],

    // Reglas generales
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "prettier/prettier": "error",
    "prefer-const": "error",
    "no-var": "error",
    "no-duplicate-imports": "error",
    eqeqeq: ["error", "always"],
  },
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
    {
      files: ["src/pages/**/*.tsx"],
      rules: {
        "import/no-default-export": "off", // Permitir default exports en pages para enrutamiento
      },
    },
  ],
};
