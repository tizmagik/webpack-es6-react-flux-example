/* eslint-disable no-process-env, no-console */
// This little dev server is basically a wrapped express server that
// 'hot loads' our javascript for super fast live reload in development
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('../webpack.config');
const host = process.env.HOST || 'localhost';
const port = process.env.HOT_LOAD_PORT || 8888;

new WebpackDevServer(webpack(config), {
    contentBase: 'http://' + host + ':' + port,
    publicPath: config.output.publicPath,
    noInfo: true,
    hot: true,
    inline: true,
    lazy: false,
    headers: {'Access-Control-Allow-Origin': '*'},
    stats: {
        colors: true
    }
}).listen(port, host, function (err, result) {
    if (err) {
        console.log(err, result);
    }

    console.log('Hot load server listening at ' + host + ':' + port);
});
