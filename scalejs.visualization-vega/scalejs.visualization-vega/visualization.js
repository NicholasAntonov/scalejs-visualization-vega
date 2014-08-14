/*global define*/
define([
    'scalejs!core',
    'vega'
], function (
    core,
    vg
) {
    'use strict';

    function init(element, valueAccessor) {
        var // Imports
            // Variables
            parameters = valueAccessor(),
            view,
            vegaSpec;

        vegaSpec = parameters.vegaSpec;


        element.setAttribute("id", "vega-vis-div");//ERROR this only allows for one vis per page, fix later

        vg.parse.spec(vegaSpec, function (chart) {
            view = chart({ el: "#vega-vis-div" }).update();
        });
    }

    return {
        init: init
    };
});

