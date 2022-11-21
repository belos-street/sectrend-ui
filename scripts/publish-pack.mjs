/**
 * 发布需要切换到dist目录
 * |
 * 设置npm源
 * |
 * 发布(如果没有登录需要先登录)
 * |
 * 设置回淘宝源
 * |
 * 主目录的package.json 版本号+1 (未完成)
 * 
 * @date 2022-11-22
 */
cd('./dist')
await $`pwd`

await $`npm config set registry https://registry.npmjs.org/`

await $`npm publish`

await $`npm config set registry https://registry.npmmirror.com/`