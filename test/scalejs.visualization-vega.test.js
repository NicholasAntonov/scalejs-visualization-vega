define([
    'scalejs!core', 'scalejs!application'
], function(
    core
) {
    var visualization = core.visualization;

    // For deeper testing, log to console
    console.log('core.visualization: ', visualization);

    describe('core.visualization', function() {

        it('is defined', function() {
            expect(visualization).toBeDefined();
        });

    });
});

