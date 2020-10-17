import type { ComputedRef } from '@vue/reactivity';
interface IUseOptions {
    currentColor: ComputedRef<string>;
}
export declare const useOptions: () => IUseOptions;
declare const _default: import("vue").DefineComponent<{
    modelValue: StringConstructor;
    showAlpha: BooleanConstructor;
    colorFormat: StringConstructor;
    disabled: BooleanConstructor;
    size: StringConstructor;
    popperClass: StringConstructor;
    predefine: ArrayConstructor;
}, {
    color: {
        enableAlpha: boolean;
        format: string;
        value: string;
        selected?: boolean;
        set: (prop: any, value?: number) => void;
        get: (prop: string) => any;
        toRgb: () => {
            r: number;
            g: number;
            b: number;
        };
        fromString: (value: any) => void;
        compare: (color: any) => boolean;
        doOnChange: () => void;
    };
    colorDisabled: ComputedRef<boolean>;
    colorSize: ComputedRef<string>;
    displayedColor: ComputedRef<string>;
    showPanelColor: import("vue").Ref<boolean>;
    showPicker: import("vue").Ref<boolean>;
    customInput: import("vue").Ref<string>;
    handleConfirm: () => void;
    hide: () => void;
    handleTrigger: () => void;
    clear: () => void;
    confirmValue: () => void;
    doDestroy: () => void;
    t: (path: string, option?: any) => string;
    hue: any;
    svPanel: any;
    alpha: any;
    popper: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    change: any;
    'active-change': any;
    "update:modelValue": any;
}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    modelValue?: string;
    showAlpha?: boolean;
    colorFormat?: string;
    disabled?: boolean;
    size?: string;
    popperClass?: string;
    predefine?: unknown[];
}>, {}>;
export default _default;
