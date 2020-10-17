declare type ValueType = boolean | string | number;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    value: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
        default: number;
    };
    activeIconClass: {
        type: StringConstructor;
        default: string;
    };
    inactiveIconClass: {
        type: StringConstructor;
        default: string;
    };
    activeText: {
        type: StringConstructor;
        default: string;
    };
    inactiveText: {
        type: StringConstructor;
        default: string;
    };
    activeColor: {
        type: StringConstructor;
        default: string;
    };
    inactiveColor: {
        type: StringConstructor;
        default: string;
    };
    activeValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    inactiveValue: {
        type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
}, {
    input: any;
    core: any;
    coreWidth: import("vue").Ref<number>;
    switchDisabled: import("vue").ComputedRef<boolean>;
    checked: import("vue").ComputedRef<boolean>;
    handleChange: () => void;
    switchValue: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "change" | "input")[], "update:modelValue" | "change" | "input", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: ValueType;
    value: ValueType;
    disabled: boolean;
    width: number;
    activeIconClass: string;
    inactiveIconClass: string;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: ValueType;
    inactiveValue: ValueType;
    name: string;
    validateEvent: boolean;
    id: string;
} & {}>, {
    modelValue: ValueType;
    value: ValueType;
    disabled: boolean;
    width: number;
    activeIconClass: string;
    inactiveIconClass: string;
    activeText: string;
    inactiveText: string;
    activeColor: string;
    inactiveColor: string;
    activeValue: ValueType;
    inactiveValue: ValueType;
    name: string;
    validateEvent: boolean;
    id: string;
}>;
export default _default;
