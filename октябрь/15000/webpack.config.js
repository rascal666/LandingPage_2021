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
            template: './src/index.pug',
            inject: 'body'
        }),
        new HtmlWebpackPugPlugin(),
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