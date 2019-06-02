const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const app_config = JSON.parse(fs.readFileSync(path.resolve(__dirname, '../config.json')).toString()).DIST;
const { TITLE } = app_config;

module.exports = {
    mode: 'production',
    entry: path.resolve(__dirname, '../src/index.js'),
    resolve: {
        extensions: ['.js', '.vue'],
        mainFiles: ['index.js'],
        alias: {
            'vue': 'vue/dist/vue.js'
        }
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle-[hash].js'
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
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            },
            {
                test: /\.less$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        { loader: 'css-loader' },
                        { loader: 'less-loader', options: { javascriptEnabled: true } },
                        // {
                            // loader: 'style-resources-loader',
                            // options: {
                            //     patterns: path.resolve(__dirname, './src/Style/antdbase.less')
                            // }
                        // }
                    ]
            },
            {
                test: /\.(png|jpg|gif|woff|ttf)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: 'static/[name].[ext]'
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.html'),
            title: TITLE,
            filename: 'index.html',
            inject: true
        }),
        new MiniCssExtractPlugin('style-[hash].css'),
        new webpack.DefinePlugin({
            APP_MODE: JSON.stringify('PRODUCTION')
        }),
        new BundleAnalyzerPlugin()
    ]
}
