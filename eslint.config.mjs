import nextConfig from "eslint-config-next";

/** @type {import("eslint").Linter.Config[]} */
const eslintConfig = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**"],
  },
  ...nextConfig,
];

export default eslintConfig;
