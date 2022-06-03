const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const infoColor = (_message) => {
    return `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;
};

module.exports = merge(commonConfig, {
    mode: "development",
    stats: "errors-warnings",
    mode: "development",
    infrastructureLogging: {
        level: "warn",
    },
    devServer: {
        host: "local-ip",
        port: 8080,
        open: true,
        https: false,
        allowedHosts: "all",
        hot: false,
        watchFiles: ["src/**", "static/**"],
        static: {
            watch: true,
            directory: path.join(__dirname, "../static"),
        },
        client: {
            logging: "none",
            overlay: true,
            progress: false,
        },
        setupMiddlewares: function (middlewares, devServer) {
            console.log("------------------------------------------------------------");
            console.log(devServer.options.host);
            const port = devServer.options.port;
            const https = devServer.options.https ? "s" : "";
            const domain1 = `http${https}://${devServer.options.host}:${port}`;
            const domain2 = `http${https}://localhost:${port}`;
            console.log(`Running at:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`);
            console.log("------------------------------------------------------------");

            return middlewares;
        },
    },
});
