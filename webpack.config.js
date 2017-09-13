const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        loaders: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]

    },
    devServer: {
        port: 4000,
        contentBase: './build',
        inline: true
    }
};