import path from 'path'
import ts from 'rollup-plugin-typescript2'
import {terser} from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'

const isDev = () => {
    return process.env.NODE_ENV === 'development'
}

export default {
    input: './src/index.ts',
    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: 'module',
        sourceMap: true
    },
    plugins: [
        ts(),
        isDev() && livereload(),
        terser({
            compress: {
                drop_console: true
            }
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        isDev() && server({
            port: 1998,
            open: true,
            openPage: '/index.html'
        })
    ]
}