declare const _default: import("vue").DefineComponent<{
    native: {
        type: BooleanConstructor;
        default: boolean;
    };
    wrapStyle: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    wrapClass: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    viewClass: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    viewStyle: {
        type: (StringConstructor | ArrayConstructor)[];
        default: string;
    };
    noresize: BooleanConstructor;
    tag: {
        type: StringConstructor;
        default: string;
    };
}, {
    moveX: import("vue").Ref<number>;
    moveY: import("vue").Ref<number>;
    sizeWidth: import("vue").Ref<string>;
    sizeHeight: import("vue").Ref<string>;
    style: import("vue").ComputedRef<string | unknown[]>;
    gutter: import("vue").ComputedRef<number>;
    wrap: any;
    resize: any;
    update: () => void;
    handleScroll: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    native: boolean;
    wrapStyle: string | unknown[];
    wrapClass: string | unknown[];
    viewClass: string | unknown[];
    viewStyle: string | unknown[];
    tag: string;
} & {
    noresize?: boolean;
}>, {
    native: boolean;
    wrapStyle: string | unknown[];
    wrapClass: string | unknown[];
    viewClass: string | unknown[];
    viewStyle: string | unknown[];
    tag: string;
}>;
export default _default;