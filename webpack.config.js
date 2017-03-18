const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
    cache: true,
    context: path.resolve(__dirname, "src"),
    entry: {
        app: "./index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js",
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.json',
            '.coffee',
            '.sass',
            '.scss',
            '.css'
        ],
        modules: [
            path.resolve("src"),
            path.resolve("src/js"),
            path.resolve("src/sass"),
            path.resolve("src/css"),
            "node_modules"
        ]
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "./dist"),
        compress: true,
        historyApiFallback: true,
        port: 7000,
        stats: {
            colors: true,
            timings: true
        }
    },
    devtool: "eval",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?cacheDirectory',
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader?sourceMap"
                })
            },
            {
                test: /\.(sass|scss)$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                }]
                // use: ['style-loader', 'css-loader', 'sass-loader']
                // use: ExtractTextPlugin.extract({
                //     use: 'css-loader!sass-loader',
                // })
            },
            {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development') // eslint-disable-line quote-props
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        // new ExtractTextPlugin("css/screen.css"),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
            hash: true
        })
    ]
};

module.exports = config;