import esbuild from 'esbuild'
import swc from '@swc/core'
import fs from 'node:fs'


//顶级await es2017支持
await esbuild.build({
    entryPoints: ['./index.js'],
    treeShaking: true,
    // 独立打包
    bundle: true,
    loader: {
        '.js':'js',
        '.ts':'ts',
        '.jsx':'jsx',
        '.tsx':'tsx'
    },
    plugins: [
        {
            name: "swc-loader",
            setup(build) {
                //params1: 要处理的文件
                build.onLoad({filter: /\.(js|ts|jsx|tsx)$/}, (args) => {
                    //获取到文件的代码
                    const content = fs.readFileSync(args.path, 'utf-8')
                    //swc: 将代码转换成es5写法
                    const {code} = swc.transformSync(content, {
                        filename: args.path
                    })
                    return {
                        contents: code
                    }
                })
            }
        }
    ],
    outdir: 'dist'
})