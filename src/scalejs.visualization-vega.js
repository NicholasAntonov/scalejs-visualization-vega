define([
    'knockout',
    '../lib/vega/vega',
    'scalejs!core'
], function (
    ko,
    vg
) {
    'use strict';

    var nextUid = (function () {
            var counter = 1;
            return function () {
                return counter += 1;
            };
        }()),
        vega = (function () {
            function init(element, valueAccessor) {
                var // Imports
                    // Variables
                    parameters = valueAccessor(),
                    elementID,
                    view,
                    vegaSpec;

                vegaSpec = parameters.vegaSpec;

                elementID = 'vega-vis-div-' + nextUid();
                element.setAttribute('id', elementID);

                vg.parse.spec(vegaSpec, function (chart) {
                    view = chart({ el: ('#' + elementID) }).update();
                });
            }

            return {
                init: init
            };
        }());


    ko.bindingHandlers.vega = vega;
});

