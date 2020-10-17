declare const _default: {
    name: string;
    componentName: string;
    props: {
        modelValue: {
            type: (BooleanConstructor | StringConstructor | NumberConstructor)[];
            default: string;
        };
        size: {
            type: StringConstructor;
            default: string;
        };
        fill: {
            type: StringConstructor;
            default: string;
        };
        textColor: {
            type: StringConstructor;
            default: string;
        };
        disabled: BooleanConstructor;
    };
    emits: string[];
    setup(props: any, ctx: any): {
        handleKeydown: (e: any) => void;
        radioGroupSize: import("vue").ComputedRef<any>;
        radioGroup: any;
    };
};
export default _default;
