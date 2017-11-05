// We are using node's native package 'path'
// https://nodejs.org/api/path.html
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Constant with our paths
const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    SRC: path.resolve(__dirname, 'src'),
    JS: path.resolve(__dirname, 'src/js'),
};

// Webpack configuration
module.exports = {

        entry: path.join(paths.JS, 'app.js'),
        output: {
            path: paths.DIST,
            filename: 'app.bundle.js',
        },

    // Tell webpack to use html plugin
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),

    ],
    // Loaders configuration -> ADDED IN THIS STEP
    // We are telling webpack to use "babel-loader" for .js and .jsx files
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules\/(?!whs)|bower_components)/,
                loader: 'babel-loader',
                query: {
                    cacheDirectory: true,
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            }

        ],
    },
    // Enable importing JS files without specifying their's extenstion -> ADDED IN THIS STEP
    //
    // So we can write:
    // import MyComponent from './my-component';
    //
    // Instead of:
    // import MyComponent from './my-component.jsx';
    resolve: {
        extensions: ['.js', '.jsx'],
        symlinks: false
    },
};
