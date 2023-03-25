import path from 'path'
import ts from 'rollup-plugin-typescript2'
import livereload from 'rollup-plugin-livereload'
import server from 'rollup-plugin-serve'
import {terser} from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'

const isDev = () => {
    return process.env.NODE_ENV = 'development'
}

export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: 'umd',
        sourceMap: true
    },
    plugins: [
        ts(),
        isDev() && livereload(),
        terser({
            compress: {
                // drop_console: true
            }
        }),
        replace({
            'process.env.NODE_ENV': process.env.NODE_ENV
        }),
        isDev && server({
            port: '19988',
            open: true,
            openPage: '/public/index.html'
        })
    ]
}