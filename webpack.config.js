const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config({ path: './.env' })

module.exports = {
    // Where files should be sent once they are bundled
    output: {
        path: path.join(__dirname, '/dist'),
        publicPath: '/',
        filename: 'index.bundle.js'
    },
    // webpack 5 comes with devServer which loads in development mode
    devServer: {
        contentBase: path.resolve(__dirname, 'src/public'),
        port: 3000,
        watchContentBase: true
    },
    // Rules of how webpack will take our files, complie & bundle them for the browser 
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/public/index.html' }),
        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env)
        })
    ],
}