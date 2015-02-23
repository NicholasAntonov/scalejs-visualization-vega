define([
    'scalejs!core',
    'knockout',
    '../src/vega',
    'scalejs!application'
], function(
    core,
    ko
) {

    // For deeper testing, log to console
    console.log('ko.bindingHandlers.vega: ', ko.bindingHandlers.vega);

    describe('ko.bindingHandlers.vega', function() {

        it('is defined', function() {
            expect(ko.bindingHandlers.vega).toBeDefined();
        });

    });
});

