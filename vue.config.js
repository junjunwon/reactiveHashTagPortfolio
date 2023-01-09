const { defineConfig } = require('@vue/cli-service')
// const path = require('path')

module.exports = defineConfig({
  publicPath: '',
  outputDir: 'dist',
  transpileDependencies: true,
  // publicPath: process.env === 'production' ? '/yoora_portfolio/' : '/',
  // indexPath: "../static/index.html",
  lintOnSave: false,
  // chainWebpack: config => {
  //   config.resolve.alias.set(
  //     'vue$',
  //     // If using the runtime only build
  //     // path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
  //     // Or if using full build of Vue (runtime + compiler)
  //     path.resolve(__dirname, 'node_modules/vue/dist/vue.esm.js')
  //   )
  // }
})
