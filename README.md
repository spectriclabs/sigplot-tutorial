# SigPlot

Welcome to SigPlot!  A fast and interactive plotter tailored for signal processing applications.  If you are
looking to chart stock prices, profits, temperatures, or other non-signal processing data you will probably
find that one of the many fine libraries such as [D3.js](http://d3js.org/), [Plotly.js](https://plot.ly/javascript/), 
or [Flot](http://www.flotcharts.org/) will better suit your needs.  Since you are still reading, let's get started with SigPlot.
Throughout this tutorial, examples will be provided in the following manner.

Code snippets will be shown in callout boxes as seen below.  These code snippets will show you how to do something with SigPlot, but
generally speaking they are only portion of the necessary code to make a full working demo.

```javascript
var plot = new sigplot.Plot(document.getElementById('plot'), {});
```

Full examples will be shown as seen below.  These examples are fully-working demos that demonstrate how to use SigPlot.  By
pressing the **Expand** button you can see the code used in the example.  If you want to play with the code in an interactive
environment you can press the **Try in Jsfiddle** button to load the example into [JSFiddle](https://jsfiddle.net).  Although the examples
are built within a [Vue.js](https://vuejs.org) context, the SigPlot code within the `mounted()` function 
does not require nor use any Vue functionality.

For example, this simple SigPlot code will plot one-cycle of a sine wave.

```html
<html>
    <body>
        <div id='plot' style="height: 400px; width: 100%;">
        </div>
        <script src="https://cdn.jsdelivr.net/npm/sigplot/dist/sigplot-debug.js"></script>
        <script>
            var plot = new sigplot.Plot(document.getElementById('plot'), {});
            var data = [];
            var npts = 1024;
            for (var ii=0; ii<npts; ++ii) {
                data.push(Math.sin((ii*2*Math.PI)/npts));
            }
            plot.overlay_array(data);
        </script>
    </body>
</html>
```

Which results in this:

```html
/*vue*/
<desc>
SigPlot Hello World
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
            var data = [];
            var npts = 1024;
            for (var ii=0; ii<npts; ++ii) {
                data.push(Math.sin((ii*2*Math.PI)/npts));
            }
            plot.overlay_array(data);
        }
    }
</script>
```

As your first excersize, click the **Expand** button followed by the **Try in Jsfiddle** button.  Then change the code
to plot the cosine instead of the sine.