const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath : '/vuestagram',  
  outputDir:'./docs',
})
