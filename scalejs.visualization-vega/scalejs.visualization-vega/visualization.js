/*global define*/
define([
    'scalejs!core',
    'vega'
], function (
    core,
    vg
) {
    'use strict';

    var nextUid;

    nextUid = (function () {
        var counter = 1;
        return function () {
            return counter++;
        };
    }());

    function init(element, valueAccessor) {
        var // Imports
            // Variables
            parameters = valueAccessor(),
            elementID,
            view,
            vegaSpec;

        vegaSpec = parameters.vegaSpec;

        elementID = "vega-vis-div-" + nextUid();
        element.setAttribute("id", elementID);

        vg.parse.spec(vegaSpec, function (chart) {
            view = chart({ el: ("#" + elementID) }).update();
        });
    }

    return {
        init: init
    };
});

