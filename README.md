# Vega Visualizations

This is an extension for scalejs that allows a vega spec to be displayed using a knockout binding. 

## Usage

Bind an object to the knockout binding ```vega``` that contains a property ```vegaSpec``` which is the vega specification of a visualization to create. 

## Examples

## Icicle Chart

In this extension I created another vega data type which corresponds to the d3 Icicle chart visualization. 


```javascript
vega: {
    vegaSpec: {
        "name": "icicle",
        "width": 960,
        "height": 500,
        "padding": 2.5,
        "data": [
          {
              "name": "tree",
              "values": this.flare,
              "format": { "type": "treejson" },
              "transform": [
                { "type": "icicle", "value": "data.size" }
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
                  "data": "tree"
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
                  "data": "tree"
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
    }
}
```

## Sunburst

In this extension I created another vega data type which corresponds to the d3 sunburst visualization. 

Here is an example with nicely rendered text.

```javascript
vega: {
    vegaSpec: {
        "name": "sunburst",
        "width": 960,
        "height": 700,
        "padding": 2.5,
        "data": [
            {
                "name": "tree",
                "values": this.flare,
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
            }
        ],
        "marks": [
            {
                "type": "arc",
                "from": {
                    "data": "tree"
                },
                "interactive": false,
                "properties": {
                    "enter": {
                        "x": { "group": "width", "mult": 0.5 },
                        "y": { "group": "height", "mult": 0.5 },
                        "innerRadius": { "field": "innerRadius" },
                        "startAngle": { "field": "startAngle" },
                        "outerRadius": { "field": "outerRadius" },
                        "endAngle": { "field": "endAngle" },
                        "fill": { "scale": "color", "field": "data.name" },
                        "stroke": { "value": "#fff" }
                    },
                    "update": {
                        "fill": { "scale": "color", "field": "data.name" }
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
                    "transform": [{ "type": "filter","test": "(d.data.name.length < 12) && ((d.endAngle - d.startAngle) > 0.045)" }]
                },
                "interactive": false,
                "properties": {
                    "enter": {
                        "x": { "group": "width", "mult": 0.5 },
                        "y": { "group": "height", "mult": 0.5 },
                        "theta": { "field": "midAngle" },
                        "angle": { "field": "textAngle"},
                        "radius": { "field": "innerRadius" },
                        "font": { "value": "Times New Roman" },
                        "fontSize": { "value": "14" },
                        "align": { "field": "textAlign" },
                        "baseline": { "value": "middle" },
                        "fill": { "value": "#000" },
                        "text": { "field": "data.name" }
                    },
                    "update": {
                        "fill": { "value": "#000" }
                    },
                    "hover": {
                        "fill": { "value": "#000" }
                    }
                }
            }
        ]
    }
}
```

However, the update and hover properties are not working as expected, and even when following the pattern that some other vega examples follow, making the highlights a seperate set of marks, produces strange results when interacting with text.

```javascript
vega: {
    vegaSpec: {
        "name": "sunburst",
        "width": 960,
        "height": 700,
        "padding": 2.5,
        "data": [
            {
                "name": "tree",
                "values": this.flare,
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
            }
        ],
        "marks": [
            {
                "type": "arc",
                "from": {
                    "data": "tree"
                },
                "interactive": false,
                "properties": {
                    "enter": {
                        "x": { "group": "width", "mult": 0.5 },
                        "y": { "group": "height", "mult": 0.5 },
                        "innerRadius": { "field": "innerRadius" },
                        "startAngle": { "field": "startAngle" },
                        "outerRadius": { "field": "outerRadius" },
                        "endAngle": { "field": "endAngle" },
                        "fill": { "scale": "color", "field": "data.name" },
                        "stroke": { "value": "#fff" }
                    }
                }
            },
            {
                "type": "arc",
                "from": {
                    "data": "tree"
                },
                "properties": {
                    "enter": {
                        "x": { "group": "width", "mult": 0.5 },
                        "y": { "group": "height", "mult": 0.5 },
                        "innerRadius": { "field": "innerRadius" },
                        "startAngle": { "field": "startAngle" },
                        "outerRadius": { "field": "outerRadius" },
                        "endAngle": { "field": "endAngle" },
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
                    "transform": [{ "type": "filter","test": "(d.data.name.length < 12) && ((d.endAngle - d.startAngle) > 0.045)" }]
                },
                "interactive": false,
                "properties": {
                    "enter": {
                        "x": { "group": "width", "mult": 0.5 },
                        "y": { "group": "height", "mult": 0.5 },
                        "theta": { "field": "midAngle" },
                        "angle": { "field": "textAngle"},
                        "radius": { "field": "innerRadius" },
                        "font": { "value": "Times New Roman" },
                        "fontSize": { "value": "14" },
                        "align": { "field": "textAlign" },
                        "baseline": { "value": "middle" },
                        "fill": { "value": "#000" },
                        "text": { "field": "data.name" }
                    },
                    "update": {
                        "fill": { "value": "#000" }
                    },
                    "hover": {
                        "fill": { "value": "#000" }
                    }
                }
            }
        ]
    }
}
```

## Limitations

### Extension

The actual scalejs binding is very limited as I made it only for testing vega. The only thing it supports now is passing the spec directly to vega, nothing more. 

### Vega

The main problem that is of concern in vega is updating data during runtime. The view.data() function is very odd. Firstly, it does not allow for a normal data array like data is mapped to in the json spec. Instead, it only accepts an object where the name of the data is matched the the values array. This means it is difficult to transform data past runtime. The way I tried to get around it was to define 2 data sets beforehand, then map one of the data sets to the other, like so:

```javascript
"data": [
    {
        "name": "tree",
        "values": this.flare,
        "format": { "type": "treejson" },
        "transform": [
            { "type": "sunburst", "value": "data.size" }
        ]
    },
    {
        "name": "alt",
        "values": this.halfFlare,
        "format": { "type": "treejson" },
        "transform": [
            { "type": "sunburst", "value": "data.size" }
        ]
    }
]
```

And then in runtime:

```javascript
view.data(view.data()['alt']);
```

However this resulted in very strange results. firstly, the alt data set had 168 elements, but after setting the tree data to the alt data, the alt remained at 168 elements, but the tree dataset had 169, with a first element that was unlike any other data elements. Also, each individual element was formatted differently than it was in alt, with an extra heirchal level of vega wrapping around the object, preventing the specification from interacting with that data correctly. However, all but the root node of the nodes I deleted from the file did indeed disappear. This was the most troubling issue I found. Two github issues that I found related to the problem are [here](https://github.com/trifacta/vega/issues/48) and [here](https://github.com/trifacta/vega/issues/100).

With simpler data manipulation, the data did update correctly, bar the new items not animating. [Example](http://jsfiddle.net/m05txmzh/4/)

## The Future

The first things to do would be to come up with an API for allowing for complex runtime manipulation of vega and adding that to the extension. After that, figuring out a good solution to the weird data mapping issue would be the next.
