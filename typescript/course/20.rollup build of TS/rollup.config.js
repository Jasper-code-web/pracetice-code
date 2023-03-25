import path from 'path'
import ts from 'rollup-plugin-typescript2'
import server from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import { terser } from 'rollup-plugin-terser'
import replace from 'rollup-plugin-replace'
const isDev = () => {
    return process.env.NODE_ENV === 'development'
}

// console.log('process.env',process.env) 环境变量

export default{
    input: './src/index.ts',

    output: {
        file: path.resolve(__dirname, './lib/index.js'),
        format: "umd",
        sourcemap: true,
    },

    plugins: [
        ts(),
        //开启服务
        isDev() && livereload(),
        //压缩代码，可以配置sourcemap便于调试
        terser({
            // 精简
            compress: {
                //去掉console
                drop_console: true
            }
        }),
        //process只有Node环境有，配置replace可以在项目中获取环境变量
        replace({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        //开启服务
        isDev() && server({
            open: true,
            port: 1988,
            openPage: "/public/index.html"
        })
    ]
}