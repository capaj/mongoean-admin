//makes sure our views are displayed-requires a running mongo instance and mongoean-admin server
describe("routes", function () {

    var ptor;

    beforeEach(function () {
        // get protractor instance
        ptor = protractor.getInstance();

    });

    it("should display how big is whole DB on root path", function () {
        ptor.get("/");
        browser.waitForAngular();
        //loadedData
        ptor.driver.executeAsyncScript('window.loadedData(arguments[arguments.length - 1]);').then(function () {
            var el = ptor.findElement(protractor.By.css('ng-view')).getText();
//                .then(function (t) {
//                    console.log(t);
//                });

            expect(el).toContain('Whole DB has ');
        });

    });
});