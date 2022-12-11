const fs = require('fs');
const { defineConfig } = require('@vue/cli-service')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new NodePolyfillPlugin()
    ]
  },
  devServer: {
    allowedHosts: "all",
    host: '0.0.0.0',
    port: 443,
  },
})
