declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    label: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: string;
    };
    disabled: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: string;
    };
    border: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: string;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isGroup: import("vue").ComputedRef<boolean>;
    isDisabled: import("vue").ComputedRef<any>;
    model: import("vue").WritableComputedRef<unknown>;
    tabIndex: import("vue").ComputedRef<0 | -1>;
    radioSize: import("vue").ComputedRef<any>;
    handleChange: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    label: string | number | boolean;
    name: string;
    size: string;
} & {
    disabled?: boolean;
    border?: boolean;
}>, {
    modelValue: string | number | boolean;
    label: string | number | boolean;
    name: string;
    size: string;
}>;
export default _default;
