# Quick Start

## Using SigPlot with online code playgrounds
The easiest way to get started with SigPlot is to use a code playground environment.

You can start with one of these three environments:

* SigPlot [jsFiddle Hello World](https://jsfiddle.net/hcm8q7a9/)
* SigPlot [CodePen Hello World](https://codepen.io/maihde-the-flexboxer/pen/YmXGQJ)
* SigPlot [jsBin Hello World](https://jsbin.com/dedugaweso/1/edit?html,css,js,output)

You can also use an offline code playground as described in 
[this article](https://www.spectric.com/post/using-a-local-code-playground-to-develop-with-sigplot).

## Using SigPlot within a standard web project

If you want to use SigPlot within a standard web project, you can simply pull the latest release
of SigPlot into your project from JSDelivr.  You can choose either the `-debug.js` version of the
`-minimized.js` version.  The former has a larger size but retains comments and variable names so you
can debug the SigPlot source code.  The later is smaller and is appropriate to use in production
environments where you are attempting to minimize page load times.

```html
<html>
  <head>
    ... other tags ...
    <script src="https://cdn.jsdelivr.net/npm/sigplot/dist/sigplot-debug.js"></script>
  </head>
  <body>
    ... your web content ...
  </body>
</html>
```

## Using SigPlot with npm

If your project uses `npm` you can install the latest SigPlot via `npm`.

```
npm install --save sigplot
```

This will download and place SigPlot `sigplot-debug.js` and `sigplot-minimimzed.js` 
into the folder `node_modules/sigplot/dist`.

## Using SigPlot with webpack

When using NPM to install SigPlot it is better to use `webpack` to manage the
dependencies.

First install webpack.

```
npm install -g webpack
```

Create a file called `demo.js` with the following contents.

```
let sigplot = require("sigplot");
let options = {};
let plot = new sigplot.Plot(document.getElementById('plot'), options);
```

Then create a file called `index.html` with the following contents.

```
<html>
  <head>
    <title>SigPlot Webpack</title>
    <style>
      #plot {
        width: 600px;
        height: 400px;
      }
    </style>
  </head>
  <body>
    <div id="plot"></div>
    <script type="text/javascript" src="bundle.js" charset="utf-8"></script>
  </body>
</html>
```

Finally build the `bundle.js` file using webpack.

```
webpack ./demo.js bundle.js
```

### Using SigPlot with JavaScript frameworks

SigPlot is a 100%-pure JavaScript library with no framework dependencies.  This means
that you can always use it within the framework of your choice, but you can also choose
to use one of the SigPlot wrappers that help adapt SigPlot to the conventions of the
framework.

* [React SigPlot](https://github.com/LGSInnovations/react-sigplot)
* [SigPlot Angular](https://github.com/Geontech/sigplot-ng)
* [Jupyter SigPlot](https://github.com/LGSInnovations/jupyter-sigplot)