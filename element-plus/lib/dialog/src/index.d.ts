import type { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: PropType<(...args: any[]) => unknown>;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    closeOnClickModal: {
        type: BooleanConstructor;
        default: boolean;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    fullscreen: {
        type: BooleanConstructor;
        default: boolean;
    };
    lockScroll: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    openDelay: {
        type: NumberConstructor;
        default: number;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    top: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
        required: true;
    };
    width: {
        type: StringConstructor;
        default: string;
        validator: (val: string) => boolean;
    };
    zIndex: {
        type: NumberConstructor;
    };
}, {
    afterEnter: () => void;
    afterLeave: () => void;
    handleClose: () => void;
    onModalClick: () => void;
    closed: import("vue").Ref<boolean>;
    dialogRef: any;
    style: import("vue").ComputedRef<CSSStyleDeclaration>;
    modalRef: import("vue").Ref<HTMLElement>;
    visible: import("vue").Ref<boolean>;
    zIndex: import("vue").Ref<number>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "opened" | "close" | "closed" | "update:modelValue")[], "open" | "opened" | "close" | "closed" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    appendToBody: boolean;
    destroyOnClose: boolean;
    center: boolean;
    customClass: string;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    fullscreen: boolean;
    lockScroll: boolean;
    modal: boolean;
    showClose: boolean;
    title: string;
    openDelay: number;
    closeDelay: number;
    top: string;
    modelValue: boolean;
    width: string;
} & {
    beforeClose?: (...args: any[]) => unknown;
    zIndex?: number;
}>, {
    appendToBody: boolean;
    destroyOnClose: boolean;
    center: boolean;
    customClass: string;
    closeOnClickModal: boolean;
    closeOnPressEscape: boolean;
    fullscreen: boolean;
    lockScroll: boolean;
    modal: boolean;
    showClose: boolean;
    title: string;
    openDelay: number;
    closeDelay: number;
    top: string;
    width: string;
}>;
export default _default;
