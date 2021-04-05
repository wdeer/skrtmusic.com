// webpack.config.js
const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const Jarvis = require("webpack-jarvis");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PolyfillInjectorPlugin = require('webpack-polyfill-injector');
const PostCssPipelineWebpackPlugin = require('postcss-pipeline-webpack-plugin');
const criticalSplit = require('postcss-critical-split');
const csso = require('postcss-csso');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin');

var isDev = process.env.NODE_ENV !== 'production'

const config = {
  mode: isDev ? 'development' : 'production',
  context: path.resolve(__dirname, '../../source'),

  entry: {
    build: `webpack-polyfill-injector?${JSON.stringify({
        modules: ['./js/main.js']
    })}!`,
    style: './scss/styles.scss',
    critical: './scss/critical.scss'
  },

  output: {
    path: path.resolve(__dirname, '../../', 'build'),
    filename: './js/[name]-[hash:8].js',
  },

  resolve: {
    extensions: ['.js', '.scss'],
    modules: ['node_modules', 'bower_components'],
    alias: {
      jquery: 'jquery/src/jquery'
    }
  }, // resolve

  module: {

    rules: [

      //babel-loader
      {
        test: /\.js(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['env']
          }
        }
      },

      // sass-loader
      {
        test: /\.s?css(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: true,
              config: {
                path: './postcss.config.js'
              }
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },

      // img-loader
      {
        test: /\.(gif|png|jpe?g|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75
              }
            }
          },
        ],
      },

      {
         test: /.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
         use: [{
           loader: 'file-loader',
           options: {
             name: '[name].[ext]',
             outputPath: 'fonts/',
             publicPath: '../fonts/'
           }
         }]
       }
    ] // rules

  }, // module
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name]-[hash:8].css"
    }),
    new PostCssPipelineWebpackPlugin({
      prefix: 'critical',
      suffix: null,
      pipeline: [
        criticalSplit({
          output: criticalSplit.output_types.CRITICAL_CSS
        })
      ]
    }),
    new PostCssPipelineWebpackPlugin({
      suffix: 'min',
      pipeline: [
        csso({
          restructure: false
        })
      ],
      map: {
        inline: false
      }
    }),
    new CleanWebpackPlugin(
      [ isDev ? 'dist' : 'build' ],
      {
        watch: true,
        root: path.resolve(__dirname, '../../'),
        allowExternal: true
      }
    ),
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        port: 3000,
        proxy: 'http://localhost:4567/',
        browser: "Blisk"
      },
      {
        reloadDelay: 90000
      }
    ),
    new CompressionWebpackPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
    new ManifestPlugin({
      fileName: "manifest.json",
      publicPath: '/',
      writeToFileEmit: true,
      map: function(file) {
       file.name = path.basename(file.name.replace(/-[a-z0-9].+\.(css|js)(.gz)/i, '.$1'));
       return file;
     },
     filter: ({name}) => !name.endsWith('.map')
    }),
    new PolyfillInjectorPlugin({
        polyfills: [
            'Promise',
            'Array.prototype.find',
        ]
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new UglifyJsPlugin({
        sourceMap: true,
        uglifyOptions: {
            dead_code: true
        }
    }),
  ]
};

module.exports = config;
