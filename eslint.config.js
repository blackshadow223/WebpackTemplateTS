import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { files: ["**/*.{js,mjs,cjs,ts}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts}"], plugins: { js }, extends: ["js/recommended"] },

  // Enable TypeChecked versions below if you need type information in linting (incurs performance penalty)
  // Disable the normal ones if TypeChecked versions are enabled
  // Only use one type of configuration from the ones below

  // Default configuration for TypeScript
  tseslint.configs.recommended,

  // Default configuration for TypeScript with Type Checking enabled
  // tseslint.configs.recommendedTypeChecked

  // Recommended Configurations
  // tseslint.configs.strict,
  // tseslint.configs.stylistic,

  // Recommended Configurations with Type Checking enabled
  // tseslint.configs.strictTypeChecked,
  // tseslint.configs.stylisticTypeChecked,

  // Enable the following configuration (important!) if type checking is enabled
  // {
  //   languageOptions: {
  //     parserOptions: {
  //       projectService: true,
  //       tsconfigRootDir: import.meta.dirname,
  //     },
  //   },
  // },


  // Disable rules that may conflict with prettier
  eslintConfigPrettier,
]);
