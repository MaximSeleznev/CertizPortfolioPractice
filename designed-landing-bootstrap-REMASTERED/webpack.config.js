let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


let conf = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js',
        publicPath: 'dist/'
    },
    devServer: {
        overlay: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use: [
                            {
                                loader: "css-loader",
                                options: {sourceMap:true}
                            },
                            {
                                loader: "postcss-loader"
                            },
                            {
                                loader: "sass-loader",
                                options: {sourceMap:true}
                            }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loaders: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'img/[name].[ext]',
                            publicPath: '../'
                        }
                    },
                    'img-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'fonts/[name].[ext]',
                            publicPath: '../'
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('css/styles.css'),
        new CopyWebpackPlugin([ {from: 'src/img', to: 'dist/../img'} ])
    ]
};

module.exports = (env, options) => {
    let isProduction = options.mode === 'production';

    conf.devtool = isProduction?false:'eval-sourcemap';

    return conf;
}