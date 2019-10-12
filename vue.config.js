const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = {
  // publicPath: '/',
  configureWebpack: {
    devtool: 'source-map',
    resolve: {
      modules: [resolve('src'), resolve('node_modules')]
    }
  },
  // 打开eslint 检查
  lintOnSave: true,

  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  // 是否在构建生产包时生成 sourceMap 文件，false将提高构建速度
  productionSourceMap: false,

  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('@v', resolve('src/views'))
      .set('@c', resolve('src/views/components'))
      .set('@r', resolve('src/request'))
      .set('_c', resolve('src/components'))
      .set('@u', resolve('src/utils'))
      .set('@a', resolve('src/assets'))
  },
  // 样式全局
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [path.resolve(__dirname, 'src/assets/css/index.less')]
    }
  }
}
