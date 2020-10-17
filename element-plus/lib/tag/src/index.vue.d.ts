declare const _default: import("vue").DefineComponent<{
    closable: BooleanConstructor;
    type: {
        type: StringConstructor;
        default: string;
    };
    hit: BooleanConstructor;
    disableTransitions: BooleanConstructor;
    color: {
        type: StringConstructor;
        default: string;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    effect: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
}, {
    tagSize: import("vue").ComputedRef<string | number>;
    classes: import("vue").ComputedRef<string[]>;
    handleClose: (event: any) => void;
    handleClick: (event: any) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "click")[], "close" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    type: string;
    color: string;
    size: string;
    effect: string;
} & {
    closable?: boolean;
    hit?: boolean;
    disableTransitions?: boolean;
}>, {
    type: string;
    color: string;
    size: string;
    effect: string;
}>;
export default _default;
