const
    path = require('path'),
    { CleanWebpackPlugin } = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require("mini-css-extract-plugin"),
    HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');


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
                        cacheDirectory: false
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
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader", "postcss-loader",
                ],
            },
            {
                test: /\.pug$/,
                loader: 'pug-loader',
                options: {
                    pretty: true,
                }
            },

        ]
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'Chernaya_HK.html',
            template: './src/index_NK.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'Chernaya_ПП.html',
            template: './src/index_PP.pug',
            inject: 'body'
        }),
        new HtmlWebpackPlugin({
            filename: 'Chernaya_ПП_shortened.html',
            template: './src/index_PP_shortened.pug',
            inject: 'body'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
        }),

    ],
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', 'css', '.jsx']
    },
    devServer: {
        static: 'dist',
        hot: true,
        historyApiFallback: true,
    }
}