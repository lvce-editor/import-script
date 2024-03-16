import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

export default {
  plugins: [commonjs(), nodeResolve()],
  input: 'src/index.js',
  output: {
    // file: 'dist/dist/index.js',
    dir: 'dist/dist',
    format: 'es',
    inlineDynamicImports: false,
  },
  external: ['@babel/parser', /babel/, '**/@babel-parser'],
}
