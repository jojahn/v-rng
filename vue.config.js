module.exports = {
  transpileDependencies: ["socket.io-client", "engine.io-client"],
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  }
};
