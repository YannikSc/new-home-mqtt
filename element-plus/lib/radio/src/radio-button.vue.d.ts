declare const _default: {
    name: string;
    props: {
        label: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        disabled: BooleanConstructor;
        name: {
            type: StringConstructor;
            default: string;
        };
    };
    setup(props: any): {
        isGroup: import("vue").ComputedRef<boolean>;
        size: import("vue").ComputedRef<any>;
        isDisabled: import("vue").ComputedRef<any>;
        tabIndex: import("vue").ComputedRef<-1 | 0>;
        value: import("vue").WritableComputedRef<unknown>;
        focus: import("vue").Ref<boolean>;
        activeStyle: import("vue").ComputedRef<{
            backgroundColor: any;
            borderColor: any;
            boxShadow: string;
            color: any;
        }>;
    };
};
export default _default;
