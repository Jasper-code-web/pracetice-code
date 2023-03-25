const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "index.ts"
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            }
        ]
    },
    //代理
    devServer: {
        port: 1988,
        proxy: {

        }
    },
    resolve: {
        //匹配后缀后缀
        extensions: ['.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ]
}