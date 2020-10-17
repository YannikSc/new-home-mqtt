import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    type: {
        type: PropType<"primary" | "success" | "warning" | "danger" | "info" | "text" | "default">;
        default: string;
        validator: (val: string) => boolean;
    };
    size: {
        type: PropType<"medium" | "small" | "mini">;
        validator: (val: string) => boolean;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    nativeType: {
        type: PropType<"button" | "submit" | "reset">;
        default: string;
        validator: (val: string) => boolean;
    };
    loading: BooleanConstructor;
    disabled: BooleanConstructor;
    plain: BooleanConstructor;
    autofocus: BooleanConstructor;
    round: BooleanConstructor;
    circle: BooleanConstructor;
}, {
    elFormItemSize_: import("vue").ComputedRef<number>;
    buttonSize: import("vue").ComputedRef<number | "medium" | "small" | "mini">;
    buttonDisabled: import("vue").ComputedRef<boolean>;
    handleClick: (evt: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "click"[], "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: "primary" | "success" | "warning" | "danger" | "info" | "text" | "default";
    icon: string;
    nativeType: "button" | "submit" | "reset";
} & {
    size?: "medium" | "small" | "mini";
    loading?: boolean;
    disabled?: boolean;
    plain?: boolean;
    autofocus?: boolean;
    round?: boolean;
    circle?: boolean;
}>, {
    type: "primary" | "success" | "warning" | "danger" | "info" | "text" | "default";
    icon: string;
    nativeType: "button" | "submit" | "reset";
}>;
export default _default;
