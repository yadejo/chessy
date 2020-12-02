const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: path.join(__dirname, "src/index.ts")
    },
    resolve: {
        extensions: [".ts", ".js", ".scss"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:  path.join(__dirname, "src/index.html"),
            minify: false
        })
    ]
}