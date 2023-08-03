const {
  version,
  author,
  name,
  license,
  repository,
} = require("../package.json");
let time = Date.now();

function build(isBundle) {
  require("esbuild")
    .build({
      entryPoints: [
        "./lib/index.js",
        "./lib/components/Button.js",
        "./lib/components/Alert.js",
        "./lib/utils/generateUUID.js",
      ],
      banner: {
        js: `/* 
    ${name} v${version} 
    Copyright (c) 2022 ${author} 
    Licensed under the ${license} license
    Github: ${repository.url}
*/`,
      },
      bundle: isBundle ?? false,
      minify: true,
      outdir: `./dist/badcss-${version}${isBundle ? "-bundle" : ""}`,
    })
    .then(() => {
      console.log(
        `Build completed in ${Date.now() - time}ms. Build type: ${
          isBundle ? "bundle" : "no bundle"
        }`
      );
    })
    .catch(() => process.exit(1));
}

build(true);
build(false);
