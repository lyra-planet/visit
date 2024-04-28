const removeImports = require('next-remove-imports')({
    test: /node_modules([\s\S]*?)\.(tsx|ts|js|mjs|jsx)$/,
    matchImports: "\\.(less|css|scss|sass|styl)$"
  });
const withTM = require("next-transpile-modules")(["echarts"]);
module.exports = withTM(removeImports({
    webpack(config, options) {
      return config
    },
    images: {
      domains: ['sm.ms',"s2.loli.net","*.*"],
    },
}))