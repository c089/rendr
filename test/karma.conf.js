module.exports = function(config) {
  config.set({

    basePath: '../',

    frameworks: ['mocha', 'browserify'],
    preprocessors: {
      'test/**/*.js': ['browserify'],
    },

    browserify: {
      //watch: true
    },

    files: [
      './examples/00_simple/assets/vendor/jquery-1.9.1.min.js',
      'test/fixtures/**/*.js',
      'test/client/router.test.js'
      //'test/client/app_view.test.js'
    ],

    exclude: [ ],

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_DEBUG,

    autoWatch: true,

    browsers: ['Chrome'],

    captureTimeout: 60000,

    singleRun: false
  });
};
