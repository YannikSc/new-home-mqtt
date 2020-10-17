import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    step: {
        type: NumberConstructor;
        default: number;
    };
    stepStrictly: {
        type: BooleanConstructor;
        default: boolean;
    };
    max: {
        type: NumberConstructor;
        default: number;
    };
    min: {
        type: NumberConstructor;
        default: number;
    };
    modelValue: NumberConstructor;
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: PropType<"large" | "small">;
        validator: (val: string) => boolean;
    };
    controls: {
        type: BooleanConstructor;
        default: boolean;
    };
    controlsPosition: {
        type: StringConstructor;
        default: string;
    };
    name: StringConstructor;
    label: StringConstructor;
    placeholder: StringConstructor;
    precision: {
        type: NumberConstructor;
        validator: (val: number) => boolean;
    };
}, {
    input: any;
    displayValue: import("vue").ComputedRef<string | number>;
    handleInput: (value: any) => any;
    handleInputChange: (value: any) => void;
    controlsAtRight: import("vue").ComputedRef<boolean>;
    decrease: () => void;
    increase: () => void;
    inputNumberSize: import("vue").ComputedRef<number | "large" | "small">;
    inputNumberDisabled: import("vue").ComputedRef<boolean>;
    maxDisabled: import("vue").ComputedRef<boolean>;
    minDisabled: import("vue").ComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input" | "blur" | "focus")[], "update:modelValue" | "change" | "input" | "blur" | "focus", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    step: number;
    stepStrictly: boolean;
    max: number;
    min: number;
    disabled: boolean;
    controls: boolean;
    controlsPosition: string;
} & {
    modelValue?: number;
    size?: "large" | "small";
    name?: string;
    label?: string;
    placeholder?: string;
    precision?: number;
}>, {
    step: number;
    stepStrictly: boolean;
    max: number;
    min: number;
    disabled: boolean;
    controls: boolean;
    controlsPosition: string;
}>;
export default _default;
