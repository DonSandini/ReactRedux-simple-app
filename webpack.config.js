var webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        contentBase: './client',
        hot: true
    },
    entry: [
        'babel-polyfill',
        'webpack-hot-middleware/client',
        './client/client.js',
        './client/index.css'
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
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!cssnext-loader?sourceMap',
                exclude: /node_modules/
            }
        ]
    },
    cssnext: {}
};