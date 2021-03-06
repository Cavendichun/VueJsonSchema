const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const app_config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config.json')).toString()).DEV;
const { LISTEN_PORT = 3000, BACKEND, TITLE } = app_config;

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    devtool: 'cheap-module-eval-source-map',
    resolve: {
        extensions: ['.js', '.vue'],
        mainFiles: [
            'index.js'
        ],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    devServer: {
        historyApiFallback: true,
        inline: true,  //自动刷新
        port: LISTEN_PORT,
        proxy: {

        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader' },
                        {
                            loader: 'less-loader',
                            options: {
                                javascriptEnabled: true,
                                modifyVars: {
                                    'primary-color': 'purple',
                                    'border-radius-base': '0',
                                    'box-shadow-base': '0 2px 8px rgba(0, 0, 0, .15)',
                                    'border-base': '1px solid #f0f2f5'
                                }
                            }
                        },
                        {
                            loader: 'style-resources-loader',
                            options: {
                                patterns: path.resolve(__dirname, './src/Style/ant-base.less')
                            }
                        }
                    ]
            },
            {
                test: /\.(png|jpg|gif|woff|ttf)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin('style.css'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: TITLE,
            filename: 'index.html',
            inject: true
        })
    ]
}
