const {
  version,
  author,
  name,
  license,
  repository,
} = require("../package.json");
let time = Date.now();

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
    bundle: false, // keep false for now
    minify: true,
    outdir: `./dist/badcss-${version}`,
  })
  .then(() => {
    console.log(`Build completed in ${Date.now() - time}ms`);
  })
  .catch(() => process.exit(1));
