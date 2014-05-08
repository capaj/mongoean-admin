var fs = require('fs');
var counter = 0;
var originalAddMatcherResult = jasmine.Spec.prototype.addMatcherResult;
jasmine.Spec.prototype.addMatcherResult = function () {
    var result = arguments[0];
    if (!result.passed()) {
        browser.takeScreenshot().then(function (png) {
            var picName = result.type + '_' + result.matcherName + '_' + counter;
            var stream = fs.createWriteStream("./test/screenshots/" + picName + ".png");
            counter++;
            stream.write(new Buffer(png, 'base64'));
            stream.end();
        });
    }
    return originalAddMatcherResult.apply(this, arguments);
};