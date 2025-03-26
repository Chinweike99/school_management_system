// import { defineConfig } from "eslint/config";
// import globals from "globals";
// import js from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";


// export default defineConfig([
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended"] },
//   tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ]);


import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginReact from "eslint-plugin-react";
// import tailwindcss from "eslint-plugin-tailwindcss";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      parser: tsParser, // TypeScript parser
      globals: globals.browser, // Browser globals (like window, document)
    },
    plugins: {
      js,
      "@typescript-eslint": tseslint,
      // tailwindcss, // Tailwind CSS ESLint plugin
    },
    rules: {
      // TypeScript rules
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off",

      // Tailwind CSS rules (for class order, structure)
      // "tailwindcss/classnames-order": "warn",
      // "tailwindcss/no-custom-classname": "off",
    },
    extends: [
      "js/recommended",
      "plugin:@typescript-eslint/recommended", 
      "plugin:react/recommended",
      "plugin:tailwindcss/recommended", 
    ],
    settings: {
      react: { version: "detect" }, 
    },
  },
]);
