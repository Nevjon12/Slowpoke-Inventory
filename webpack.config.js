const webpack = require('webpack')
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
require('dotenv').config({path:'.env'});


module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './src/client'),
        },
        port: 8080,
        hot: true,
        liveReload : true,
        proxy: {
            '/' :
             'http://localhost:3000',
        },
        historyApiFallback: true,
    },



    entry: './src/client/index.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: '/'  
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/index.html'
        }),

        new webpack.DefinePlugin({
            "process.env": JSON.stringify(process.env),
          }),
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader' , 'css-loader' ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

}