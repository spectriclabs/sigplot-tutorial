# Basic Line Plots

A simple line-plot (also known as Layer1D) is created from a series of values where
each value is separated by a constant delta.  For example, if you measured the temperatue
in a room every hour from 9AM to 9PM, you would have a list of values like this:

```
[70.3, 71.1, 71.7, 72.3, 72.1, 72.2, 72.0, 71.6, 71.1, 71.2, 71.4, 71.7]
```

If you wanted to plot these in SigPlot, you would use the `overlay_array` method.


```javascript
plot.overlay_array(data, {
    xstart: 32400,
    xdelta: 3600,
    xunits: "Time code format",
    yunits: ["Temperature", "F"]
});
```

The parameters `xstart`, `xdelta`, `xunits`, and `yunits` are used to adjust the labels and 
axes of the plots.  In this example, we set `xstart` to 32,400 to represent 9AM
(i.e. the number of seconds since mignight) and `xdelta` to 3,600 (i.e. the number of seconds
in an hour).  The `xunits` are set to "Time code format" which is a special unit format used
to indicate that the x-values should be converted to days/minutes/hours instead of kept as seconds.

There are [more details on unit types](Units.md) in the appendix.  Below is our basic temperature
plot.

```html
/*vue*/
<desc>
SigPlot Basic Line Plot
</desc>

<style>
    #plot {
    height: 400px;
    width: 100%;
    }
</style>

<template>
    <div id='plot'>
    </div>
</template>

<script>
    export default {
        mounted() {
            var plot = new sigplot.Plot(document.getElementById('plot'), {});
            var data = [70.3, 71.1, 71.7, 72.3, 72.1, 72.2, 72.0, 71.6, 71.1, 71.2, 71.4, 71.7];
            plot.overlay_array(data, {
                xstart: 32400,
                xdelta: 3600,
                xunits: "Time code format",
                yunits: ["Temperature", "F"]
            });
        }
    }
</script>
```

By default, SigPlot shows a lot of information, but this can give a cluttered look so we will turn 
the extra stuff off.

```javascript
var plot = new sigplot.Plot(document.getElementById('plot'), {
  autohide_readout: true, // only show readout when mouse is over plot
  autohide_panbars: true, // only show panbars if the plot has been zoomed
  no_legend_button: true, // turn of the legend button in the upper right
  legend: true // show a legend by default (can be toggled by pressing 'L')
});
```

```html
/*vue*/
<desc>
SigPlot Basic Line Plot With Improved Looks
</desc>

<style>
    #plot2 {
    height: 400px;
    width: 100%;
    }
</style>

<template>
    <div id='plot2'>
    </div>
</template>

<script>
    export default {
        mounted() {
            var plot = new sigplot.Plot(document.getElementById('plot2'), {
                autohide_readout: true,
                autohide_panbars: true,
                no_legend_button: true,
                legend: true
            });
            var data = [70.3, 71.1, 71.7, 72.3, 72.1, 72.2, 72.0, 71.6, 71.1, 71.2, 71.4, 71.7];
            plot.overlay_array(data, {
                xstart: 32400,
                xdelta: 3600,
                xunits: "Time code format",
                yunits: ["Temperature", "F"]
            });
        }
    }
</script>
```

Next, we will tweak the display of our plot by changing the display of the line.  The `overlay_array`
method accepts up to three arguments `overlay_array(data_array, data_header, layer_options)`.  The
`layer_options` can be used to customize the display or functionality of the layer.

```javascript
plot.overlay_array(data, {
    xstart: 32400,
    xdelta: 3600,
    xunits: "Time code format",
    yunits: ["Temperature", "F"]
}, {
    color: "red",
    symbol: 6, // triangles
    radius: 5, // size of symbols
    fillStyle: ["orange", "rgba(0, 153, 51, 0.7)", "rgba(0, 0, 0, 0.2)"], // gradient fill
    name: "Room Temperature"
});
```

```html
/*vue*/
<desc>
SigPlot Basic Line Plot With Customized Line Settings
</desc>

<style>
    #plot3 {
    height: 400px;
    width: 100%;
    }
</style>

<template>
    <div id='plot3'>
    </div>
</template>

<script>
    export default {
        mounted() {
            var plot = new sigplot.Plot(document.getElementById('plot3'), {
                autohide_readout: true,
                autohide_panbars: true,
                no_legend_button: true,
                legend: true
            });
            var data = [70.3, 71.1, 71.7, 72.3, 72.1, 72.2, 72.0, 71.6, 71.1, 71.2, 71.4, 71.7];
            plot.overlay_array(data, {
                xstart: 32400,
                xdelta: 3600,
                xunits: "Time code format",
                yunits: ["Temperature", "F"]
            }, {
                color: "red",
                symbol: 6, // triangles
                radius: 5,
                fillStyle: ["orange", "rgba(0, 153, 51, 0.7)", "rgba(0, 0, 0, 0.2)"],
                name: "Room Temperature"
            });
        }
    }
</script>
```

By default, SigPlot auto-scales to show your data, but you can also force SigPlot to show a
specific range of data.  For example, these settings will have the plot show 24 hours of time
with a tempature range of 0 to 100.

```javascript
var plot = new sigplot.Plot(document.getElementById('plot4'), {
    autohide_readout: true,
    autohide_panbars: true,
    no_legend_button: true,
    legend: true,
    ymin: 0, // 0 degrees F minimum on y-axes
    ymax: 100, // 100 degrees F maximun on y-axes
    xmin: 0, // 0 seconds from midnight on x-axes
    xmax: 86400 // 24 hours from midnight on x-axes
});
```

```html
/*vue*/
<desc>
SigPlot Basic Line Plot Fixed Axes
</desc>

<style>
    #plot4 {
    height: 400px;
    width: 100%;
    }
</style>

<template>
    <div id='plot4'>
    </div>
</template>

<script>
    export default {
        mounted() {
            var plot = new sigplot.Plot(document.getElementById('plot4'), {
                autohide_readout: true,
                autohide_panbars: true,
                no_legend_button: true,
                legend: true,
                ymin: 0,
                ymax: 100,
                xmin: 0, 
                xmax: 86400
            });
            var data = [70.3, 71.1, 71.7, 72.3, 72.1, 72.2, 72.0, 71.6, 71.1, 71.2, 71.4, 71.7];
            plot.overlay_array(data, {
                xstart: 32400,
                xdelta: 3600,
                xunits: "Time code format",
                yunits: ["Temperature", "F"]
            }, {
                color: "red",
                symbol: 6, // triangles
                radius: 5,
                fillStyle: ["orange", "rgba(0, 153, 51, 0.7)", "rgba(0, 0, 0, 0.2)"],
                name: "Room Temperature"
            });
        }
    }
</script>
```