/// <reference types="node" />
/**
 * 获取名称
 *
 * @param {string} name
 *
 * @return {string}
 */
export function getName(name: string): string;
/**
 * get promise
 *
 * @returns {Promise<number>}
 */
export function getPromise(): Promise<number>;
/**
 * get async
 *
 * @returns {Promise<string>}
 */
export function getAsync(): Promise<string>;
/**
 * A number, or a string containing a number.
 * @typedef {(number|string)} NumberLike
 */
/**
 * Set the magic number.
 * @param {NumberLike} x - The magic number.
 */
export function setMagicNumber(x: NumberLike): void;
/**
 * @type {number}
 */
export const A: number;
/**
 * @type {boolean}
 */
export let B: boolean;
/**
 * @type {string}
 */
export let C: string;
export namespace car {
    const name: string;
    const model: number;
    const color: string;
}
export let reg: RegExp;
export class Person {
    /**
     * @param {string} name
     * @param {number} age
     */
    constructor(name: string, age: number);
    name: string;
    age: number;
}
/**
 * http serve
 */
export class HttpServe extends Serve {
    createServer(): () => http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
}
/**
 * A number, or a string containing a number.
 */
export type NumberLike = (number | string);
declare class Serve {
    /**
     * @param {number} port
     */
    constructor(port: number);
    port: void;
    serve(): http.Server<typeof http.IncomingMessage, typeof http.ServerResponse>;
}
import http = require("http");
export {};
