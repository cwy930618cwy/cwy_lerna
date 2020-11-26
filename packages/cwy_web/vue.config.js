module.exports = {
  lintOnSave: false,
  configureWebpack: config => {
    if (config.optimization) {
      config.optimization.minimizer[0].options.uglifyOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.uglifyOptions.compress.keep_fnames = true
      config.optimization.minimizer[0].options.uglifyOptions.mangle.keep_fnames = true
    }
  },
  chainWebpack: config => {
    config.module.rule('css').oneOf('normal').uses.delete('postcss-loader')
  }
};
