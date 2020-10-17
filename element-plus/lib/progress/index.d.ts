import { App } from 'vue';
declare const _default: (app: App) => void;
export default _default;
export declare const ElProgress: import("vue").DefineComponent<readonly string[] | Readonly<import("vue").ComponentObjectPropsOptions<Record<string, unknown>>>, unknown, unknown, Record<string, import("@vue/reactivity").ComputedGetter<any> | import("vue").WritableComputedOptions<any>>, import("vue").MethodOptions, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, any>, import("vue").EmitsOptions, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    [x: number]: string;
} & {
    length?: number;
    toString?: string;
    toLocaleString?: string;
    concat?: string[];
    join?: string;
    slice?: string[];
    indexOf?: (searchElement: string, fromIndex?: number) => number;
    lastIndexOf?: (searchElement: string, fromIndex?: number) => number;
    every?: {
        <S extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S, thisArg?: any): this is readonly S[];
        (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): boolean;
    };
    some?: (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any) => boolean;
    forEach?: (callbackfn: (value: string, index: number, array: readonly string[]) => void, thisArg?: any) => void;
    map?: <U>(callbackfn: (value: string, index: number, array: readonly string[]) => U, thisArg?: any) => U[];
    filter?: {
        <S_1 extends string>(predicate: (value: string, index: number, array: readonly string[]) => value is S_1, thisArg?: any): S_1[];
        (predicate: (value: string, index: number, array: readonly string[]) => unknown, thisArg?: any): string[];
    };
    reduce?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
        <U_1>(callbackfn: (previousValue: U_1, currentValue: string, currentIndex: number, array: readonly string[]) => U_1, initialValue: U_1): U_1;
    };
    reduceRight?: {
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string): string;
        (callbackfn: (previousValue: string, currentValue: string, currentIndex: number, array: readonly string[]) => string, initialValue: string): string;
        <U_2>(callbackfn: (previousValue: U_2, currentValue: string, currentIndex: number, array: readonly string[]) => U_2, initialValue: U_2): U_2;
    };
    find?: {
        <S_2 extends string>(predicate: (this: void, value: string, index: number, obj: readonly string[]) => value is S_2, thisArg?: any): S_2;
        (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any): string;
    };
    findIndex?: (predicate: (value: string, index: number, obj: readonly string[]) => unknown, thisArg?: any) => number;
    entries?: IterableIterator<[number, string]>;
    keys?: IterableIterator<number>;
    values?: IterableIterator<string>;
    includes?: (searchElement: string, fromIndex?: number) => boolean;
    flatMap?: <U_3, This = undefined>(callback: (this: This, value: string, index: number, array: string[]) => U_3 | readonly U_3[], thisArg?: This) => U_3[];
    flat?: unknown[];
}> | Readonly<{} & {
    [x: string]: unknown;
}>, {
    [x: number]: string;
} | {}>;
