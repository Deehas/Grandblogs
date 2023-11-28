const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    const svgRule = config.module.rule("svg");

    svgRule.uses.clear();

    svgRule.delete('type');
		svgRule.delete('generator');

    svgRule
      .oneOf('dataurl')
			.resourceQuery(/dataurl/)
			.use('svg-url-loader')
			.loader('svg-url-loader')
			.end()
			.end()
			.oneOf('vue-component')
			.test(/.*\.svg/)
      .use("babel-loader")
      .loader("babel-loader")
      .end()
			.use('vue-svg-loader')
			.loader('vue-svg-loader')
			.end()
			.end();
      // .use("vue-svg-loader")
      // .loader("vue-svg-loader");
  },
});
