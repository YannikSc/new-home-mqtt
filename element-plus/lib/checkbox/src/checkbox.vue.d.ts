declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
        default: () => any;
    };
    label: {
        type: (BooleanConstructor | NumberConstructor | StringConstructor)[];
    };
    indeterminate: BooleanConstructor;
    disabled: BooleanConstructor;
    checked: BooleanConstructor;
    name: {
        type: StringConstructor;
        default: any;
    };
    trueLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
    falseLabel: {
        type: (NumberConstructor | StringConstructor)[];
        default: any;
    };
    id: {
        type: StringConstructor;
        default: any;
    };
    controls: {
        type: StringConstructor;
        default: any;
    };
    border: BooleanConstructor;
    size: {
        type: StringConstructor;
        default: any;
    };
}, {
    focus: import("vue").Ref<boolean>;
    isChecked: import("vue").ComputedRef<any>;
    isDisabled: import("vue").ComputedRef<any>;
    checkboxSize: import("vue").ComputedRef<any>;
    model: import("vue").WritableComputedRef<any>;
    handleChange: (e: InputEvent) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change")[], "update:modelValue" | "change", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number | boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
    id: string;
    controls: string;
    size: string;
} & {
    label?: string | number | boolean;
    indeterminate?: boolean;
    disabled?: boolean;
    checked?: boolean;
    border?: boolean;
}>, {
    modelValue: string | number | boolean;
    name: string;
    trueLabel: string | number;
    falseLabel: string | number;
    id: string;
    controls: string;
    size: string;
}>;
export default _default;