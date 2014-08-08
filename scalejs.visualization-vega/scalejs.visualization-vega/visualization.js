/*global define*/
define([
    'scalejs!core',
    'vega'
], function (
    core
) {
    'use strict';

    function function1() {
        console.log('main.function1 is called');
    }

    return {
        init: function1
    };
});

