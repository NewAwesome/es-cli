// rollup.config.js
import commonjs from 'rollup-plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import babel from 'rollup-plugin-babel'
import pck from './package.json'

const extensions = ['.js', '.jsx', '.ts', '.tsx']

export default {
    input: 'src/index.ts',
    // Specify here external modules which you don't want to include in yourbundle (for instance: 'lodash', 'moment' etc.)
    // https://rollupjs.org/guide/en#external-e-external
    external: [],
    output: [
        {
            file: pck.main,
            format: 'cjs'
        },
        {
            file: pck.module,
            format: 'es'
        },
        {
            // A self-executing function, suitable for inclusion as a <script> tag. (If you want to create a bundle for your application, you probably want to use this.)
            file: pck.iife,
            format: 'iife',
            name: 'selfExecutableBundle',
            // 可指定全局变量
            globals: {}
        }
    ],
    plugins: [
        resolve({ extensions }),
        // Allow bundling cjs modules. Rollup doesn't understand cjs
        commonjs(),
        // Compile TypeScript/JavaScript files
        babel({ extensions, include: ['src/**/*'] })
    ]
}
