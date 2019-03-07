var webpackConfig = require('./webpack.config.js');
module.exports = function(config) {
    config.set({
      basePath: '',
      exclude: [],
      files: [
        //'tests/unit/Homecontroller-spec.Spec.js',
        //'tests/unit/Homeservice-spec.Spec.js',
        //'tests/unit/Parttimecomponent-spec.Spec.js',
        'tests/e2e/Home-spec.Spec.js',
        './src/app.js'
        
        
      ],
      plugins: [
          'karma-jasmine',
          'karma-chrome-launcher',
          'karma-webpack'

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

      customLaunchers: {
        ChromeHeadlessNoSandbox: {
          base: 'ChromeHeadless',
          flags: ['--no-sandbox']
        }
      },
  

    webpack: webpackConfig,
      preprocessors: {
        //add webpack as preprocessor to support require() in test-suits .js files
        './src/app.js': ['webpack'],
        './tests/unit/*.js': ['webpack']
      },
      webpackMiddleware: {
        //turn off webpack bash output when run the tests
        noInfo: true,
        stats: 'errors-only'
      },
  

    });
  };