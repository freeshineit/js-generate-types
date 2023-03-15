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

- example2
```js
const http = require("http");

// -------------------------- variable ---------------------------

/**
 * @type {number}
 */
export const A = 100;

/**
 * @type {boolean}
 */
export let B = true;

/**
 * @type {string}
 */
export let C = "string";

export let car = { name: "Fiat", model: 500, color: "white" };

export let reg = /[a-zA-Z]/;

// -------------------------- end variable ------------------------

// -------------------------- function ------------------------

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

/**
 * get promise
 *
 * @returns {Promise<number>}
 */
export function getPromise() {
  return Promise.resolve(100);
}

/**
 * get async
 *
 * @returns {Promise<string>}
 */
export async function getAsync() {
  return Promise.resolve("async");
}

// 联合类型
// https://www.jsdoc.com.cn/tags-typedef
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
export function setMagicNumber(x) {}

// -------------------------- end function ------------------------

// -------------------------- class ------------------------

export class Person {
  /**
   * @param {string} name
   * @param {number} age
   */
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Serve {
  /**
   * @param {number} port
   */
  constructor(port) {
    this.port = name;
  }

  serve() {
    return http.createServer((res, req) => {}).listen(this.port);
  }
}

/**
 * http serve
 */
export class HttpServe extends Serve {
  /**
   * @param {number} port
   */
  constructor(port) {
    super(port);
  }

  createServer() {
    return this.serve;
  }
}

// -------------------------- end class ------------------------
```
执行`npx tsc`, 在[types/index.d.ts](./types/index.d.ts)