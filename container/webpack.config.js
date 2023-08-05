const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
    mode: "development",
    devServer: {
        port: 6001
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "container",
            remotes: {
                barchart: "barchart@http://localhost:6002/remoteEntry.js",
                linechart: "linechart@http://localhost:6003/remoteEntry.js",
                piechart: "piechart@http://localhost:6010/remoteEntry.js",
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
}