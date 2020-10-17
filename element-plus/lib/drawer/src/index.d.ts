import { PropType } from 'vue';
import { IDrawerDirection } from './drawer';
declare const _default: import("vue").DefineComponent<{
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    beforeClose: {
        type: PropType<(any: any) => void>;
        default: any;
    };
    customClass: {
        type: StringConstructor;
        default: string;
    };
    closeOnPressEscape: {
        type: BooleanConstructor;
        default: boolean;
    };
    destroyOnClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    direction: {
        type: PropType<IDrawerDirection>;
        default: string;
        validator(val: IDrawerDirection): boolean;
    };
    modalAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    showClose: {
        type: BooleanConstructor;
        default: boolean;
    };
    size: {
        type: StringConstructor;
        default: string;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    modelValue: {
        type: BooleanConstructor;
    };
    wrapperClosable: {
        type: BooleanConstructor;
        default: boolean;
    };
    withHeader: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    root: import("vue").Ref<HTMLElement>;
    drawer: import("vue").Ref<HTMLElement>;
    closed: import("vue").Ref<boolean>;
    afterEnter: () => void;
    afterLeave: () => void;
    handleWrapperClick: () => void;
    isHorizontal: import("vue").ComputedRef<boolean>;
    closeDrawer: () => void;
    popupData: {
        opened: boolean;
        bodyPaddingRight: any;
        computedBodyPaddingRight: number;
        withoutHiddenClass: boolean;
        rendered: boolean;
    };
    open: (options?: Partial<import("./drawer").IDrawerWithPopupOption>) => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("open" | "opened" | "close" | "closed" | "update:modelValue")[], "open" | "opened" | "close" | "closed" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    appendToBody: boolean;
    beforeClose: (any: any) => void;
    customClass: string;
    closeOnPressEscape: boolean;
    destroyOnClose: boolean;
    modal: boolean;
    direction: IDrawerDirection;
    modalAppendToBody: boolean;
    showClose: boolean;
    size: string;
    title: string;
    wrapperClosable: boolean;
    withHeader: boolean;
} & {
    modelValue?: boolean;
}>, {
    appendToBody: boolean;
    beforeClose: (any: any) => void;
    customClass: string;
    closeOnPressEscape: boolean;
    destroyOnClose: boolean;
    modal: boolean;
    direction: IDrawerDirection;
    modalAppendToBody: boolean;
    showClose: boolean;
    size: string;
    title: string;
    wrapperClosable: boolean;
    withHeader: boolean;
}>;
export default _default;
