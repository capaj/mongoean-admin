exports.config = {
    /**
     * Use `seleniumAddress` for faster startup; run `./node_modules/.bin/webdriver-manager start` to launch the Selenium server.
     * Use `seleniumPort` to let Protractor manage its own Selenium server instance (using the server JAR in its default location).
     */
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // seleniumPort: 4444,

    /**
     * Path to your E2E test files, relative to the location of this configuration file.
     * We're pointing to the directory where our CoffeeScript output goes.
     */
    specs: [
        './test/protractor/**/*.js'
    ],

    /**
     * Properties passed to Selenium -- see https://code.google.com/p/selenium/wiki/DesiredCapabilities for more info.
     */
    capabilities: {
        'browserName': 'chrome'
    },
    framework: 'jasmine',
    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        defaultTimeoutInterval: 30000,
        showColors: true, // Use colors in the command line report.
        isVerbose: true, // List all tests in the console
        includeStackTrace: true
    },
    /**
     * This should point to your running app instance, for relative path resolution in tests.
     */
    baseUrl: 'http://localhost:29017',
    allScriptsTimeout: 11000
};