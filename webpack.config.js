const HtmlWebPackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

var path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js',
    vendor: [
      "jquery",
      "moment",
      "fullcalendar"
  ]
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name]-bundle.js'
  },
  resolve: {
    alias: {
        jquery: "jquery/src/jquery",
        'jquery-ui': 'jquery-ui/ui/widgets'
  
      
    }
  },
  module:{
    rules:[
        {
            test:/\.css$/,
            use:['style-loader','css-loader']
        },
        {
          test: /\.exec\.js$/,
          exclude:[/node_modules/],
          use: {
            loader: "babel-loader",
          },
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              attrs: [':data-src']
            }
          }
        },
        {
          test: /\.ttf$/,
          loaders: [
            'url-loader'
          ]
        },
        {
          test:/\.(ttf|eot|gif|png|jpe?g|svg|woff(2)?)(\?[a-z0-9]+)?$/i,
          use: [
            'file-loader',
            {
              loader: 'image-webpack-loader',
            }
          ],
        }

   ]

  }, 
  plugins: [
    new HtmlWebPackPlugin({
      template:  path.resolve(__dirname, './src/index.ejs'),
      filename: "./index.html",
      inject: false
    }),
    new webpack.ProvidePlugin({
      "$":"jquery",
      "jQuery":"jquery",
      "window.jQuery":"jquery"
  })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
  
};


/*
 {
          test: /\.exec\.js$/,
          use: [ 'script-loader' ]
        }
*/