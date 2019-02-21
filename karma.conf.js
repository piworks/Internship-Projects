module.exports = function(config) {
    config.set({
      basePath: '',
      exclude: [],
      files: [
        {pattern: 'tests/unit/*.js',watched:true,served:true,included:true}  
      ],
      plugins: [
          require('karma-jasmine'),
          require('karma-chrome-launcher'),
          require('karma-webpack')

      ],
      
      autoWatch: true,
      singleRun:false,
      failOnEmptyTestSuite:false,
      logLevel: config.LOG_WARN,

      frameworks: ['jasmine'],
      
      browsers: ['Chrome'],
      
     // reporters: ['mocha',/*'kjhtml','dots','progress','spec'*/],
      
      listenAddress: '0.0.0.0',

      hostname: 'localhost',

      port: 9876,

      retryLimit:0,

      browserDisconnectTimeout: 5000,

      browserNoActivityTimeout: 10000,

      captureTimeout: 60000,
  
      client: {
        captureConsole:false,
        clearContext:false,
        runInParent: false,
        useIframe:true,
        jasmine:{
          random: false
        }
      },
  

    //   webpack: {
    //     module: {
    //       rules: [
    //         {
    //           test: /\.js$/i,
    //           exclude:/(node_modules)/,
    //           loader:'babel-loader',
    //           options:{
    //             presets:['@babel/preset-env']
    //           }
    //         }
    //       ]
    //     }
    //   },

    webpack: require('./webpack.config.js'),
      preprocessors: {
        //add webpack as preprocessor to support require() in test-suits .js files
        './tests/unit/*.js': ['webpack']
      },
      webpackMiddleware: {
        //turn off webpack bash output when run the tests
        noInfo: true,
        stats: 'errors-only'
      },
  

    });
  };