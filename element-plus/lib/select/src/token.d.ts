import type { InjectionKey } from 'vue';
import type { Emitter } from 'mitt';
interface SelectGroupContext {
    disabled: boolean;
}
export interface SelectContext {
    props: {
        multiple: boolean;
        value: unknown[];
        multipleLimit: number;
        valueKey: string;
        modelValue: unknown[];
        popperClass: string;
    };
    selectWrapper: HTMLElement;
    cachedOptions: any[];
    selected: any | any[];
    multiple: boolean;
    hoverIndex: number;
    setSelected(): void;
    valueKey: string;
    remote: boolean;
    optionsCount: number;
    filteredOptionsCount: number;
    options: unknown[];
    selectEmitter: Emitter;
    onOptionDestroy(i: number): any;
    handleOptionSelect(vm: unknown, byClick: boolean): any;
}
export declare const selectGroupKey: InjectionKey<SelectGroupContext>;
export declare const selectKey: InjectionKey<SelectContext>;
export declare const selectEvents: {
    queryChange: string;
    groupQueryChange: string;
};
export {};
