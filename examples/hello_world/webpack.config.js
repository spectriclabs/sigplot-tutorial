const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve(__dirname, "app")
        ]
    }
};
