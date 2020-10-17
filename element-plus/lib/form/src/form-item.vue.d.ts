import { PropType } from 'vue';
import { RuleItem } from 'async-validator';
declare const _default: import("vue").DefineComponent<{
    label: StringConstructor;
    labelWidth: StringConstructor;
    prop: StringConstructor;
    required: {
        type: BooleanConstructor;
        default: any;
    };
    rules: PropType<RuleItem | RuleItem[]>;
    error: StringConstructor;
    validateStatus: StringConstructor;
    for: StringConstructor;
    inlineMessage: {
        type: (BooleanConstructor | StringConstructor)[];
        default: string;
    };
    showMessage: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: StringConstructor;
}, {
    formItemClass: import("vue").ComputedRef<(string | {
        'el-form-item--feedback': boolean;
        'is-error': boolean;
        'is-validating': boolean;
        'is-success': boolean;
        'is-required': boolean;
        'is-no-asterisk': boolean;
    })[]>;
    shouldShowError: import("vue").ComputedRef<boolean>;
    elForm: import("./token").ElFormContext;
    labelStyle: import("vue").ComputedRef<{
        width?: undefined;
    } | {
        width: string;
    }>;
    contentStyle: import("vue").ComputedRef<Partial<CSSStyleDeclaration>>;
    validateMessage: import("vue").Ref<string>;
    labelFor: import("vue").ComputedRef<string>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    required: boolean;
    inlineMessage: string | boolean;
    showMessage: boolean;
} & {
    label?: string;
    labelWidth?: string;
    prop?: string;
    rules?: unknown;
    error?: string;
    validateStatus?: string;
    for?: string;
    size?: string;
}>, {
    required: boolean;
    inlineMessage: string | boolean;
    showMessage: boolean;
}>;
export default _default;
