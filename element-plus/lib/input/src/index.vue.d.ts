import type { PropType } from 'vue';
declare type AutosizeProp = {
    minRows?: number;
    maxRows?: number;
} | boolean;
declare const _default: import("vue").DefineComponent<{
    modelValue: {
        type: (StringConstructor | NumberConstructor)[];
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: PropType<"large" | "medium" | "small" | "mini">;
        validator: (val: string) => boolean;
    };
    resize: {
        type: PropType<"none" | "both" | "horizontal" | "vertical">;
        validator: (val: string) => boolean;
    };
    autosize: {
        type: PropType<AutosizeProp>;
        default: boolean;
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    form: {
        type: StringConstructor;
        default: string;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    readonly: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearable: {
        type: BooleanConstructor;
        default: boolean;
    };
    showPassword: {
        type: BooleanConstructor;
        default: boolean;
    };
    showWordLimit: {
        type: BooleanConstructor;
        default: boolean;
    };
    suffixIcon: {
        type: StringConstructor;
        default: string;
    };
    prefixIcon: {
        type: StringConstructor;
        default: string;
    };
    label: {
        type: StringConstructor;
        default: string;
    };
    tabindex: {
        type: StringConstructor;
        default: string;
    };
    validateEvent: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    input: any;
    textarea: any;
    attrs: import("vue").Ref<{}>;
    inputSize: import("vue").ComputedRef<number | "large" | "medium" | "small" | "mini">;
    validateState: import("vue").ComputedRef<string>;
    validateIcon: import("vue").ComputedRef<any>;
    textareaStyle: import("vue").ComputedRef<{
        resize: "none" | "both" | "horizontal" | "vertical";
    }>;
    inputDisabled: import("vue").ComputedRef<boolean>;
    showClear: import("vue").ComputedRef<boolean>;
    showPwdVisible: import("vue").ComputedRef<boolean>;
    isWordLimitVisible: import("vue").ComputedRef<boolean>;
    upperLimit: import("vue").ComputedRef<unknown>;
    textLength: import("vue").ComputedRef<number>;
    hovering: import("vue").Ref<boolean>;
    inputExceed: import("vue").ComputedRef<boolean>;
    passwordVisible: import("vue").Ref<boolean>;
    inputOrTextarea: import("vue").ComputedRef<any>;
    handleInput: (event: any) => void;
    handleChange: (event: any) => void;
    handleFocus: (event: any) => void;
    handleBlur: (event: any) => void;
    handleCompositionStart: () => void;
    handleCompositionUpdate: (event: any) => void;
    handleCompositionEnd: (event: any) => void;
    handlePasswordVisible: () => void;
    clear: () => void;
    select: () => void;
    focus: () => void;
    blur: () => void;
    getSuffixVisible: () => string | boolean | import("vue").Slot;
    onMouseLeave: (e: any) => void;
    onMouseEnter: (e: any) => void;
    handleKeydown: (e: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "input" | "change" | "focus" | "blur" | "clear" | "mouseleave" | "mouseenter" | "keydown")[], "update:modelValue" | "input" | "change" | "focus" | "blur" | "clear" | "mouseleave" | "mouseenter" | "keydown", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    modelValue: string | number;
    type: string;
    autosize: boolean;
    autocomplete: string;
    form: string;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    showPassword: boolean;
    showWordLimit: boolean;
    suffixIcon: string;
    prefixIcon: string;
    label: string;
    tabindex: string;
    validateEvent: boolean;
} & {
    size?: "large" | "medium" | "small" | "mini";
    resize?: "none" | "both" | "horizontal" | "vertical";
}>, {
    modelValue: string | number;
    type: string;
    autosize: boolean;
    autocomplete: string;
    form: string;
    disabled: boolean;
    readonly: boolean;
    clearable: boolean;
    showPassword: boolean;
    showWordLimit: boolean;
    suffixIcon: string;
    prefixIcon: string;
    label: string;
    tabindex: string;
    validateEvent: boolean;
}>;
export default _default;
