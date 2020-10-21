declare const _default: import("vue").DefineComponent<{
    src: {
        type: StringConstructor;
        default: string;
    };
    fit: {
        type: StringConstructor;
        default: string;
    };
    lazy: {
        type: BooleanConstructor;
        default: boolean;
    };
    scrollContainer: {
        type: (ObjectConstructor | StringConstructor)[];
        default: any;
    };
    previewSrcList: {
        type: ArrayConstructor;
        default: () => any[];
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    attrs: import("vue").Ref<{}>;
    loading: import("vue").Ref<boolean>;
    hasLoadError: import("vue").Ref<boolean>;
    showViewer: import("vue").Ref<boolean>;
    imgWidth: import("vue").Ref<number>;
    imgHeight: import("vue").Ref<number>;
    imageStyle: import("vue").ComputedRef<{
        width?: undefined;
        height?: undefined;
    } | {
        width: string;
        height: string;
    } | {
        width: string;
        height?: undefined;
    } | {
        height: string;
        width?: undefined;
    } | {
        'object-fit': string;
    }>;
    alignCenter: import("vue").ComputedRef<boolean>;
    preview: import("vue").ComputedRef<boolean>;
    imageIndex: import("vue").ComputedRef<number>;
    clickHandler: () => void;
    closeViewer: () => void;
    container: import("vue").Ref<HTMLElement>;
    t: (path: string, option?: any) => string;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "error"[], "error", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    src: string;
    fit: string;
    lazy: boolean;
    scrollContainer: any;
    previewSrcList: unknown[];
    zIndex: number;
} & {}>, {
    src: string;
    fit: string;
    lazy: boolean;
    scrollContainer: any;
    previewSrcList: unknown[];
    zIndex: number;
}>;
export default _default;