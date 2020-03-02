const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./source/app.js",
    output: {
        path: path.resolve(__dirname, "public"),
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'test webpack',
            filename: 'test.html',
            template: 'source/template.html'
        }),
    ]
}