import rocketseatConfig from "@rocketseat/eslint-config/react.js";
import simpleImportSort from "eslint-plugin-simple-import-sort";

export default [
  {
    files: ["**/*.js", "**/*.jsx"],
    plugins: {
      "simple-import-sort": simpleImportSort,
      rocketseatConfig,
    },
    rules: {
      "simple-import-sort/imports": "error",
    },
  },
];
