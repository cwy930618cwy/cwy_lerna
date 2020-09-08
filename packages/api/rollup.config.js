import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve';
import fs from 'fs'

let apiBase = 'https://game.hashworld.top'

if (fs.existsSync('./api-base.local')) {
  apiBase = fs.readFileSync('./api-base.local', 'utf8').trim()
}

export default {
  output: {
    format: 'esm',
  },
  external: ['axios', 'data', 'models'],
  plugins: [
    resolve(),
    replace({
      'process.env.API_BASE': `'${apiBase}'`
    })
  ]
}