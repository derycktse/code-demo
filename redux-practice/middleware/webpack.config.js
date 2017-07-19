var htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin')
module.exports = {
    devtool:"source-map",
    entry: {
        index: './test.js'
    },
    output: {
        path: __dirname + '/dist/',
        filename: 'index_bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            // use: ["style-loader", 'css-loader']
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        },
        {
            test: /\.js$/,
            // exclude: /node_modules/,
            use: 'babel-loader'
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            minify: {},
            inject: 'head',
            template: 'template.html',
            filename: 'admin.html',
            chunks: ["index"]
        }),
        new ExtractTextPlugin("[name][hash].css"),
    ]
}