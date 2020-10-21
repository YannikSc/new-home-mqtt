import { PropType } from 'vue';
import type { NotificationVM } from './notification';
declare const _default: import("vue").DefineComponent<{
    customClass: {
        type: StringConstructor;
        default: string;
    };
    dangerouslyUseHTMLString: {
        type: BooleanConstructor;
        default: boolean;
    };
    duration: {
        type: NumberConstructor;
        default: number;
    };
    iconClass: {
        type: StringConstructor;
        default: string;
    };
    id: {
        type: StringConstructor;
        default: string;
    };
    message: {
        type: PropType<string | NotificationVM>;
        default: string;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    onClick: {
        type: PropType<() => void>;
        default: () => any;
    };
    onClose: {
        type: PropType<() => void>;
        required: true;
    };
    position: {
        type: PropType<"top-right" | "top-left" | "bottom-right" | "bottom-left">;
        default: string;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    zIndex: {
        type: NumberConstructor;
        default: number;
    };
}, {
    horizontalClass: import("vue").ComputedRef<"right" | "left">;
    typeClass: import("vue").ComputedRef<string>;
    positionStyle: import("vue").ComputedRef<{
        [x: string]: string;
    }>;
    verticalProperty: import("vue").ComputedRef<"top" | "bottom">;
    visible: import("vue").Ref<boolean>;
    closed: import("vue").Ref<boolean>;
    timer: any;
}, unknown, {}, {
    destroyElement(): void;
    startTimer(): void;
    clearTimer(): void;
    click(): void;
    close(): void;
    keydown({ code }: KeyboardEvent): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("close" | "click")[], "close" | "click", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    customClass: string;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    iconClass: string;
    id: string;
    message: string | NotificationVM;
    offset: number;
    onClick: () => void;
    onClose: () => void;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    showClose: boolean;
    title: string;
    type: string;
    zIndex: number;
} & {}>, {
    customClass: string;
    dangerouslyUseHTMLString: boolean;
    duration: number;
    iconClass: string;
    id: string;
    message: string | NotificationVM;
    offset: number;
    onClick: () => void;
    position: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    showClose: boolean;
    title: string;
    type: string;
    zIndex: number;
}>;
export default _default;