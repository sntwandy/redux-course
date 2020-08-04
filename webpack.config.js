const path = require('path');
const webpack = require('webpack');
// const dotenv = require('dotenv');
const CompressionWebpackPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = (process.env.ENV === 'development');
const entry = ['./src/frontend/index.js'];

if (isDev) {
    entry.push('webpack-hot-middleware/client?path=/__webpack_hmr&timeout=2000&reload=true');
};

module.exports = {
  entry,
  mode: process.env.ENV,
  output: {
    path: path.resolve(__dirname, 'src/server/public'),
    filename: isDev ?  'js/app.js' : 'js/app-[hash].js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
        chunks: 'async',
        name: true,
        cacheGroups: {
            vendors: {
                name: 'vendors',
                chunks: 'all',
                reuseExistingChunk: true,
                priority: 1,
                filename: isDev ? 'js/vendor.js' : 'js/vendor-[hash].js',
                enforce: true,
                test(module, chunks) {
                    const name = module.nameForCondition && module.nameForCondition();
                    return chunks.some(chunk => chunk.name != 'vendors' && /[\\/]node_modules[\\/]/.test(name));
                }
            }
        }
    },
},
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.(s*)css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    isDev ? new webpack.HotModuleReplacementPlugin() : () => {},
        isDev ? () => {} : new CompressionWebpackPlugin({
            test: /\.js$|\.css$/,
            filename: '[path].gz',
        }),
    isDev ? () => {} : new ManifestPlugin(),
    new MiniCssExtractPlugin({
      filename: isDev ?  'assets/app.css' : 'assets/app-[hash].css]',
    }),
  ],
};