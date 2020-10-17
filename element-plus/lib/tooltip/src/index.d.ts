import type { PropType } from 'vue';
import type { Effect, Placement, Options } from '@element-plus/popper/src/popper/defaults';
declare const _default: import("vue").DefineComponent<{
    effect: {
        type: PropType<Effect>;
        default: Effect;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    manual: {
        type: BooleanConstructor;
        default: boolean;
    };
    modelValue: {
        type: BooleanConstructor;
        validator: (val: unknown) => boolean;
        default: any;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: PropType<Placement>;
        default: Placement;
    };
    popperOptions: {
        type: PropType<Options>;
        default: () => any;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: (StringConstructor | NumberConstructor)[];
        default: number;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: PropType<string | string[]>;
        default: () => string[];
    };
    visibleArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    onUpdateVisible: (val: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "update:modelValue"[], "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    effect: Effect;
    class: string;
    content: string;
    disabled: boolean;
    enterable: boolean;
    hideAfter: number;
    manual: boolean;
    modelValue: boolean;
    offset: number;
    openDelay: number;
    placement: Placement;
    popperOptions: Options;
    showAfter: number;
    tabindex: string | number;
    transition: string;
    trigger: string | string[];
    visibleArrow: boolean;
} & {}>, {
    effect: Effect;
    class: string;
    content: string;
    disabled: boolean;
    enterable: boolean;
    hideAfter: number;
    manual: boolean;
    modelValue: boolean;
    offset: number;
    openDelay: number;
    placement: Placement;
    popperOptions: Options;
    showAfter: number;
    tabindex: string | number;
    transition: string;
    trigger: string | string[];
    visibleArrow: boolean;
}>;
export default _default;
