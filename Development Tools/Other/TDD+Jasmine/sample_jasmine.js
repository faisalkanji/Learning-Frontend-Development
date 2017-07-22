/*
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests.
    */
    describe('Name of Test Suite', function() {
        /* To define a test declare it with the "it" function that takes in the name of the test and a function that evaluates the test
         */
        it('describe the test to be preformed', function() {
            //if expect evaluates to true the test will pass
            expect(class or id or var to test).test_to_run():
            //see doc for all tests that can be run
            //You can have mutliple expect statemnets
            expect(allFeeds.length).not.toBe(0);
        });

        // you can test using jQuery actions
        it('menu toggles when clicked', function() {
            //trigger menu click
            $('.menu-icon-link').trigger('click');
            //check if menu is visable
            expect($('body').hasClass('menu-hidden')).not.toBeTruthy();
            //click on menu again
            $('.menu-icon-link').trigger('click');
            //check if menu is hidden
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
        });

        // you can test async requests using callbacks
        //beforeEach runs a function prior to executing test
        beforeEach(function(done){
            //loads request
            loadFeed(0, function(){
                //callback for once request is loaded
                done();
            });
        });
        it('feed should contain at least one entry', function(done) {
            //checks to see if data is received
            expect($('.feed .entry').length).toBeGreaterThan(0);
            done();
        });

    });

}());