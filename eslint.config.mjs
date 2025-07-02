import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import htmlPlugin from "@html-eslint/eslint-plugin";
import htmlParser from "@html-eslint/parser";


export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"] 
  },
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    languageOptions: { globals: globals.browser } 
  },
  // HTML config
  {
    files: ["**/*.html"],
    plugins: { "@html-eslint": htmlPlugin },
    languageOptions: { parser: htmlParser },
    extends: htmlPlugin.configs["flat/recommended"],
  },
]);
