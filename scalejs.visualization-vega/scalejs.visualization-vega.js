/*global define*/
define([
    'knockout',
    './scalejs.visualization-vega/visualization'
], function (
    ko,
    vega
) {
    'use strict';

    ko.bindingHandlers.vega = vega;
});

