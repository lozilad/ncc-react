import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";

// const packageJson = require("./package.json");
const main_path = "dist/cjs/index.js";
const module_path = "dist/esm/index.js";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: main_path,
        format: "cjs",
        sourcemap: false,
      },
      {
        file: module_path,
        format: "esm",
        sourcemap: false,
      },
    ],
    plugins: [
      resolve(),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];  