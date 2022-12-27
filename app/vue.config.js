const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pluginOptions: {
    electronBuilder: {
      preload: 'src/preload.js',
      //preload: { preload: 'src/preload.js', otherPreload: 'src/preload2.js' }
    }
  }
})
