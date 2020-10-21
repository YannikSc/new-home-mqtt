/// <reference types="lodash" />
import { isObject, isArray, isString, capitalize, looseEqual, extend, camelize, hasOwn } from '@vue/shared';
import type { AnyFunction } from './types';
import type { Ref } from 'vue';
export declare type PartialCSSStyleDeclaration = Partial<Pick<CSSStyleDeclaration, 'transform' | 'transition' | 'animation'>>;
export declare function toObject<T>(arr: Array<T>): Record<string, T>;
export declare const getValueByPath: (obj: any, paths?: string) => unknown;
export declare function getPropByPath(obj: any, path: string, strict: boolean): {
    o: unknown;
    k: string;
    v: Nullable<unknown>;
};
export declare const generateId: () => number;
export declare const escapeRegexpString: (value?: string) => string;
export declare const coerceTruthyValueToArray: (arr: any) => any[];
export declare const isIE: () => boolean;
export declare const isEdge: () => boolean;
export declare const isFirefox: () => boolean;
export declare const autoprefixer: (style: PartialCSSStyleDeclaration) => PartialCSSStyleDeclaration;
export declare const kebabCase: (str: string) => string;
export { hasOwn, isObject, isArray, isString, capitalize, camelize, looseEqual, extend, };
export declare const isBool: (val: unknown) => boolean;
export declare const isNumber: (val: unknown) => boolean;
export declare const isHTMLElement: (val: unknown) => boolean;
export declare function rafThrottle<T extends AnyFunction<any>>(fn: T): AnyFunction<void>;
export declare const objToArray: <T>(value?: import("lodash").Many<T>) => T[];
export declare const clearTimer: (timer: Ref<TimeoutHandle>) => void;
export declare function getRandomInt(max: number): number;
export declare function entries<T>(obj: Hash<T>): [string, T][];
export declare function isUndefined(val: any): boolean;
export { isVNode } from 'vue';
export declare function useGlobalConfig(): any;