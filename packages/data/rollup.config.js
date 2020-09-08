import resolve from 'rollup-plugin-node-resolve'
export default {
  output: {
    format: 'esm',
  },
  external: ['defer-promise', 'vuex-module-decorators'],
  onwarn (warning, next) {
    if (warning.toString().match("The 'this' keyword is equivalent to 'undefined' at the top level of an ES module, and has been rewritten")) return
    next(warning)
  },
  plugins: [
    resolve()
  ]
}