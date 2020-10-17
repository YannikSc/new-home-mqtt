import { VNode } from 'vue';
declare const _default: import("vue").DefineComponent<{
    trigger: {
        type: StringConstructor;
        default: string;
    };
    type: StringConstructor;
    size: {
        type: StringConstructor;
        default: string;
    };
    splitButton: BooleanConstructor;
    hideOnClick: {
        type: BooleanConstructor;
        default: boolean;
    };
    placement: {
        type: StringConstructor;
        default: string;
    };
    showTimeout: {
        type: NumberConstructor;
        default: number;
    };
    hideTimeout: {
        type: NumberConstructor;
        default: number;
    };
    tabindex: {
        type: NumberConstructor;
        default: number;
    };
    effect: {
        type: StringConstructor;
        default: string;
    };
}, () => VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("visible-change" | "click" | "command")[], "visible-change" | "click" | "command", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    trigger: string;
    size: string;
    hideOnClick: boolean;
    placement: string;
    showTimeout: number;
    hideTimeout: number;
    tabindex: number;
    effect: string;
} & {
    type?: string;
    splitButton?: boolean;
}>, {
    trigger: string;
    size: string;
    hideOnClick: boolean;
    placement: string;
    showTimeout: number;
    hideTimeout: number;
    tabindex: number;
    effect: string;
}>;
export default _default;
