function generateLoaders(loaders) {
  var sourceLoader = loaders
    .map(function (loader) {
      var extraParamChar;
      if (/\?/.test(loader)) {
        loader = loader.replace(/\?/, "-loader?");
        extraParamChar = "&";
      } else {
        loader = loader + "-loader";
        extraParamChar = "?";
      }
      return loader + (options.sourceMap ? extraParamChar + "sourceMap" : "");
    })
    .join("!");

  // (which is the case during production build)
  if (options.extract) {
    return ExtractTextPlugin.extract("vue-style-loader", sourceLoader);
  } else {
    return ["vue-style-loader", sourceLoader].join("!");
  }
}

console.log("css", generateLoaders(["css"]));

console.log("less", generateLoaders(["css", "less"]));

console.log(generateLoaders(["css", "sass?indentedSyntax"]));
