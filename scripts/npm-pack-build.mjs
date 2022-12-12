await $`pnpm test:coverage`
await $`pnpm run-p type-check build-only`

sleep(1000)
const { version } = await fs.readJson('./package.json')

const verList = version.split('.')
const ver = `${verList[0]}.${verList[1]}.${Number(verList[2]) + 1}`

const packJson = `{
  "name": "sectrend-ui",
  "version": "${ver}",
  "license": "MIT",
  "main": "sectrend-ui.es.js",
  "types": "sectrend-ui.d.ts",
  "homepage": "https://github.com/aa1213889/sectrend-ui",
  "bugs": {
    "email": "869135421@qq.com"
  }
}`
console.log(packJson)

await fs.writeFile(`./dist/package.json`, packJson)

console.log('打包完成')
console.log('记得让主目录packages.json 的版本号自增')