var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './client/client.js'
    ],
    output: {
        path: '/dist',
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true,
            __DEVTOOLS__: true
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            }
        ]
    }
};