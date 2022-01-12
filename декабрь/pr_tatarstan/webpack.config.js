const
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');
const autoprefixer = require('autoprefixer')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts'
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader",
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true
                }
            },

        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: "reliable_B2B_marketplace.html",
            template: './src/reliable_B2B_marketplace.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: "universal_sales_service.html",
            template: './src/universal_sales_service.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: "design_site.html",
            template: './src/design_site.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: "three_traffic_channels.html",
            template: './src/three_traffic_channels.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: "reliable_B2B_marketplace_double.html",
            template: './src/reliable_B2B_marketplace_double.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: "works_for_your_success.html",
            template: './src/works_for_your_success.pug',
            inject: 'body'
        }),
        new HtmlWebpackPugPlugin(),
        new MiniCssExtractPlugin({
            filename: "bundle.css",
        }),

    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        static: 'dist',
        hot: true,
        historyApiFallback: true,
    }
}