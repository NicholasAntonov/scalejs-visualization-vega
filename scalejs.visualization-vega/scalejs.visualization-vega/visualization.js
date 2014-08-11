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
            data,
            vegaSpec;

        vegaSpec = {
            "width": 400,
            "height": 200,
            "padding": {"top": 10, "left": 30, "bottom": 30, "right": 10},
            "data": [{"name": "table"}],
            "scales": [
              {
                  "name": "x", "type": "ordinal", "range": "width",
                  "domain": {"data": "table", "field": "data.x"}
              },
              {
                  "name": "y", "range": "height", "nice": true,
                  "domain": {"data": "table", "field": "data.y"}
              }
            ],
            "axes": [
              {"type": "x", "scale": "x"},
              {"type": "y", "scale": "y"}
            ],
            "marks": [
              {
                  "type": "rect",
                  "from": {"data": "table"},
                  "properties": {
                      "enter": {
                          "x": {"scale": "x", "field": "data.x"},
                          "y": {"scale": "y", "field": "data.y"},
                          "y2": {"scale": "y", "value": 0},
                          "width": {"scale": "x", "band": true, "offset": -1}
                      },
                      "update": {
                          "fill": {"value": "steelblue"}
                      },
                      "hover": {
                          "fill": {"value": "red"}
                      }
                  }
              },
              {
                  "type": "rect",
                  "interactive": false,
                  "from": {"data": "table"},
                  "properties": {
                      "enter": {
                          "x": {"scale": "x", "field": "data.x", "offset": -3.5},
                          "y": {"scale": "y", "field": "data.y", "offset": -3.5},
                          "y2": {"scale": "y", "value": 0, "offset": 3.5},
                          "width": {"scale": "x", "band": true, "offset": 6},
                          "fill": {"value": "transparent"},
                          "stroke": {"value": "red"},
                          "strokeWidth": {"value": 2}
                      },
                      "update": {
                          "strokeOpacity": {"value": 0}
                      },
                      "hover": {
                          "strokeOpacity": {"value": 1}
                      }
                  }
              }
            ]
        };//parameters.vega ? parameters.vega : {};

        data = {
            table: [
              { "x": 1, "y": 28 }, { "x": 2, "y": 55 },
              { "x": 3, "y": 43 }, { "x": 4, "y": 91 },
              { "x": 5, "y": 81 }, { "x": 6, "y": 53 },
              { "x": 7, "y": 19 }, { "x": 8, "y": 87 },
              { "x": 9, "y": 52 }, { "x": 10, "y": 48 },
              { "x": 11, "y": 24 }, { "x": 12, "y": 49 },
              { "x": 13, "y": 87 }, { "x": 14, "y": 66 },
              { "x": 15, "y": 17 }, { "x": 16, "y": 27 },
              { "x": 17, "y": 68 }, { "x": 18, "y": 16 },
              { "x": 19, "y": 49 }, { "x": 20, "y": 75 }
            ]
        };

        var data2 = {
            table: [
              { "x": 1, "y": 28 }, { "x": 2, "y": 55 },
              { "x": 3, "y": 43 }, { "x": 4, "y": 91 },
              { "x": 5, "y": 81 }, { "x": 6, "y": 53 },
              { "x": 7, "y": 19 }, { "x": 8, "y": 87 },
              { "x": 9, "y": 52 }, { "x": 10, "y": 48 },
              { "x": 11, "y": 24 }, { "x": 12, "y": 49 },
              { "x": 13, "y": 87 }, { "x": 14, "y": 66 },
              { "x": 15, "y": 17 }, { "x": 16, "y": 27 },
              { "x": 17, "y": 68 }, { "x": 18, "y": 16 },
              { "x": 19, "y": 49 }, { "x": 20, "y": 75 },
              { "x": 21, "y": 60 }, { "x": 22, "y": 50 }
            ]
        };

        var treeSpec = {
            "name": "sunburst",
            "width": 960,
            "height": 500,
            "padding": 2.5,
            "data": [
              {
                  "name": "tree",
                  "values": parameters.data,
                  "format": { "type": "treejson" },
                  "transform": [
                    { "type": "sunburst", "value": "data.size" }
                  ]
              }
            ],
            "scales": [
              {
                  "name": "color",
                  "type": "ordinal",
                  "range": [
                    "#3182bd", "#6baed6", "#9ecae1", "#c6dbef", "#e6550d",
                    "#fd8d3c", "#fdae6b", "#fdd0a2", "#31a354", "#74c476",
                    "#a1d99b", "#c7e9c0", "#756bb1", "#9e9ac8", "#bcbddc",
                    "#dadaeb", "#636363", "#969696", "#bdbdbd", "#d9d9d9"
                  ]
              },
              {
                  "name": "size",
                  "type": "ordinal",
                  "domain": [0, 1, 2, 3],
                  "range": [256, 28, 20, 14]
              },
              {
                  "name": "opacity",
                  "type": "ordinal",
                  "domain": [0, 1, 2, 3],
                  "range": [0.15, 0.5, 0.8, 1.0]
              }
            ],
            "marks": [
              {
                  "type": "rect",
                  "from": {
                      "data": "tree",
                      "transform": [{ "type": "filter", "test": "d.values" }]
                  },
                  "interactive": false,
                  "properties": {
                      "enter": {
                          "x": { "field": "x" },
                          "y": { "field": "y" },
                          "width": { "field": "width" },
                          "height": { "field": "height" },
                          "fill": { "scale": "color", "field": "data.name" }
                      }
                  }
              },
              {
                  "type": "rect",
                  "from": {
                      "data": "tree",
                      "transform": [{ "type": "filter", "test": "!d.values" }]
                  },
                  "properties": {
                      "enter": {
                          "x": { "field": "x" },
                          "y": { "field": "y" },
                          "width": { "field": "width" },
                          "height": { "field": "height" },
                          "stroke": { "value": "#fff" }
                      },
                      "update": {
                          "fill": { "value": "rgba(0,0,0,0)" }
                      },
                      "hover": {
                          "fill": { "value": "red" }
                      }
                  }
              },
              {
                  "type": "text",
                  "from": {
                      "data": "tree",
                      "transform": [{ "type": "filter", "test": "d.values" }]
                  },
                  "interactive": false,
                  "properties": {
                      "enter": {
                          "x": { "field": "x" },
                          "y": { "field": "y" },
                          "dx": { "field": "width", "mult": 0.5 },
                          "dy": { "field": "height", "mult": 0.5 },
                          "font": { "value": "Helvetica Neue" },
                          "fontSize": { "scale": "size", "field": "depth" },
                          "align": { "value": "center" },
                          "baseline": { "value": "middle" },
                          "fill": { "value": "#000" },
                          "fillOpacity": { "scale": "opacity", "field": "depth" },
                          "text": { "field": "data.name" }
                      }
                  }
              }
            ]
        };

        element.setAttribute("id", "vega-vis-div");//ERROR this only allows for one vis per page, fix later

        vg.parse.spec(treeSpec, function (chart) {
            view = chart({ el: "#vega-vis-div" }).update();
        });
    }

    return {
        init: init
    };
});

