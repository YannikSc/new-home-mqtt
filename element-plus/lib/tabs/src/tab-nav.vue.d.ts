import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    panes: {
        type: PropType<any[]>;
        default: () => any[];
    };
    currentName: {
        type: StringConstructor;
        default: string;
    };
    editable: BooleanConstructor;
    onTabClick: {
        type: PropType<(tab: any, tabName: string, ev: Event) => void>;
        default: () => void;
    };
    onTabRemove: {
        type: PropType<(tab: any, ev: Event) => void>;
        default: () => void;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    stretch: BooleanConstructor;
}, {
    rootTabs: any;
    scrollable: import("vue").Ref<boolean | {
        next?: boolean;
        prev?: number;
    }>;
    navOffset: import("vue").Ref<number>;
    isFocus: import("vue").Ref<boolean>;
    focusable: import("vue").Ref<boolean>;
    navScroll$: import("vue").Ref<HTMLElement>;
    nav$: import("vue").Ref<HTMLElement>;
    el$: import("vue").Ref<HTMLElement>;
    sizeName: import("vue").ComputedRef<"width" | "height">;
    navStyle: import("vue").ComputedRef<{
        transform: string;
    }>;
    scrollPrev: () => void;
    scrollNext: () => void;
    scrollToActiveTab: () => void;
    update: () => void;
    changeTab: (e: any) => void;
    setFocus: () => void;
    removeFocus: () => void;
    visibilityChangeHandler: () => void;
    windowBlurHandler: () => void;
    windowFocusHandler: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    panes: any[];
    currentName: string;
    onTabClick: (tab: any, tabName: string, ev: Event) => void;
    onTabRemove: (tab: any, ev: Event) => void;
    type: string;
} & {
    editable?: boolean;
    stretch?: boolean;
}>, {
    panes: any[];
    currentName: string;
    onTabClick: (tab: any, tabName: string, ev: Event) => void;
    onTabRemove: (tab: any, ev: Event) => void;
    type: string;
}>;
export default _default;