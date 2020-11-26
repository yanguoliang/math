import babelPlugin from '@rollup/plugin-babel'
import { eslint } from "rollup-plugin-eslint";
const prettier = require('rollup-plugin-prettier');
console.log(prettier)
export default {
  input: 'lib/index.js',
  output: {
    file: './dist/bundle.js',
    format: 'umd',
    name: "lazyLoad",
  },
  plugins: [
    babelPlugin({
      babelHelpers: "runtime",
    }),
    eslint(),
    prettier()
  ],
};
