var path = require('path');
console.log(path.resolve(__dirname , '../src'));

module.exports = {
    context: path.resolve(__dirname , '../src'),
    entry: {
        javascript: "./app.js"
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: ".bundle.js"
    },
    module: {
        loaders: [{
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015']
            }
        }]
    },
    resolve: {
        // babel doesn't know that it should load jsx
        // we need to specify that implicitly
        extensions: ['', '.js', '.jsx'],
    }
};