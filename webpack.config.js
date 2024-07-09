const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, './index.js'),
    devtool: "eval-source-map",

    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(svg|png|jpg|jpe?g|gif|mp4|pdf)$/i,
                use: [
                    {
                      loader: 'file-loader',
                    },
                 ],            
            },
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, './index.html'),
          }),
    ],
    output: {
        path: path.resolve(__dirname, './src'),
        filename: 'bundle.js',
    },
    devServer: {
        port: 3333,
        hot: true,
    },
};