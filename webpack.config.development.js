const pkg = require('./package');
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: __dirname,
    devtool: 'inline-source-map',
    entry: {
        main: ['webpack-hot-middleware/client',
            './spec/index.js'],
        mission: ['webpack-hot-middleware/client',
            './spec/mission/index.js'],
        profile: ['webpack-hot-middleware/client',
            './spec/profile/index.js']
    },
    output: {
        path: path.join(__dirname, 'build'),
        filename: '[name].spec.js',
        publicPath: '/build/'
    },
    resolve: {
        extensions: ['', '.scss', '.js', '.json', '.ts'],
        packageMains: ['browser', 'web', 'browserify', 'main', 'style']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['babel-loader', 'ts-loader'],
                exclude: [/(node_modules)/]
            },
            {
                test: /\.js$/,
                loader: 'babel',
                exclude: [/(node_modules)/, /react-css-themr/]
            }, {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass?sourceMap')
            }
        ]
    },
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "theme/_config_main.scss";',
        includePaths: [path.resolve(__dirname, './spec')]
    },
    plugins: [
        new ExtractTextPlugin('[name].css', {allChunks: true}),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            VERSION: JSON.stringify(pkg.version)
        })
    ]
};
