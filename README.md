## js生成对应的类型声明文件(.d.ts)

### Use

```bash
# generate types (.d.ts)
pnpm run type
# or
npx tsc
```
### tsconfig.json 配置

下面配置很重要

```json
{
    "compilerOptions": {
        "allowJs": true,                                  
        "checkJs": true, /** 这个会有提示 */                                  
        "declaration": true, 
        "emitDeclarationOnly": true
    }
}
```
### [jsdoc](https://www.jsdoc.com.cn/)结合tsc

使用文档注释可以方便ts去推导类型。当然如果ts自己能推导出那就可以不用去声明注释。


- example
```js
/**
 * 获取名称
 */
export function getName(name) {
  return name;
}
```

```ts
/**
 * 获取名称
 */
export function getName(name: any): any;
```

- example1
```js
/**
 * 获取名称
 *
 * @param {string} name
 *
 * @return {string}
 */
export function getName(name) {
  return name;
}
```

```ts
/**
 * 获取名称
 *
 * @param {string} name
 *
 * @return {string}
 */
export function getName(name: string): string;
```