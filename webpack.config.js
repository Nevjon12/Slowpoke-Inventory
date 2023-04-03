const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, './src/client'),
        },
        port: 8080,
        open: true,
        hot: true,
        liveReload : true,
        proxy: {
            '/inventory' : 'http://localhost:3000',
        },
        historyApiFallback: true,
    },



    entry: './src/client/index.js',

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'  
    },

    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/index.html'
        })
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
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json']
    },

}