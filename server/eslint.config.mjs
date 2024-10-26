import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default [
  {files: ["/*.{js,mjs,cjs,ts,jsx,tsx}"]},
  {files: ["/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {  
    plugins: {  
      'import': pluginImport,  
    },
    rules: {  
      // Add the following lines:  
      'import/named': 'off',   // For named exports  
      'import/default': 'off', // For default exports  
      'import/export': 'off',  // For export statements  
    },  
  },  
];