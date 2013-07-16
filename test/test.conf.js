basePath = '..';
files = [
    JASMINE,
    JASMINE_ADAPTER,
    'bower_components/jquery/jquery.js',
    'bower_components/moment/moment.js',
    'bower_components/bootstrap/docs/assets/js/bootstrap.js',
    'bower_components/angular-1.1.3/angular.js',
    'bower_components/angular-1.1.3/angular-mocks.js',
    'src/js/datetimepicker.js',
    'test/*.spec.js'
];

// list of files to exclude
exclude = [

];


// test results reporter to use
// possible values: 'dots', 'progress', 'junit'
reporters = ['progress'];


// web server port
port = 9876;


// cli runner port
runnerPort = 9100;


// enable / disable colors in the output (reporters and logs)
colors = true;


// level of logging
// possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
logLevel = LOG_INFO;


// enable / disable watching file and executing tests whenever any file changes
autoWatch = false;


// Start these browsers, currently available:
// - Chrome
// - ChromeCanary
// - Firefox
// - Opera
// - Safari (only Mac)
// - PhantomJS
// - IE (only Windows)
browsers = ['Chrome'];


// If browser does not capture in given timeout [ms], kill it
captureTimeout = 60000;


// Continuous Integration mode
// if true, it capture browsers, run tests and exit
singleRun = true;