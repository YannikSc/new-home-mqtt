declare const _default: import("vue").DefineComponent<{
    arrowOffset: {
        type: NumberConstructor;
        default: number;
    };
    appendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    boundariesPadding: {
        type: NumberConstructor;
        default: number;
    };
    content: {
        type: StringConstructor;
        default: string;
    };
    class: {
        type: StringConstructor;
        default: string;
    };
    closeDelay: {
        type: NumberConstructor;
        default: number;
    };
    cutoff: {
        type: BooleanConstructor;
        default: boolean;
    };
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    effect: {
        type: import("vue").PropType<import("./popper/defaults").Effect>;
        default: import("./popper/defaults").Effect;
    };
    enterable: {
        type: BooleanConstructor;
        default: boolean;
    };
    hideAfter: {
        type: NumberConstructor;
        default: number;
    };
    manualMode: {
        type: BooleanConstructor;
        default: boolean;
    };
    showAfter: {
        type: NumberConstructor;
        default: number;
    };
    offset: {
        type: NumberConstructor;
        default: number;
    };
    placement: {
        type: import("vue").PropType<import("@popperjs/core/lib/enums").Placement>;
        default: import("@popperjs/core/lib/enums").Placement;
    };
    popperClass: {
        type: StringConstructor;
        default: string;
    };
    pure: {
        type: BooleanConstructor;
        default: boolean;
    };
    popperOptions: {
        type: import("vue").PropType<import("@popperjs/core/lib/types").Options>;
        default: () => any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    strategy: {
        type: import("vue").PropType<import("@popperjs/core/lib/types").PositioningStrategy>;
        default: import("@popperjs/core/lib/types").PositioningStrategy;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: import("vue").PropType<import("./popper/defaults").Trigger>;
        default: string;
    };
    tabIndex: {
        type: StringConstructor;
        default: string;
    };
    visible: {
        type: BooleanConstructor;
        default: any;
    };
}, {
    update: () => void;
    doDestroy: (forceDestroy?: boolean) => void;
    show: () => void;
    hide: () => void;
    onPopperMouseEnter: () => void;
    onPopperMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
    initializePopper: () => void;
    arrowRef: import("vue").Ref<HTMLElement>;
    events: {
        onClick?: (e: Event) => void;
        onMouseEnter?: (e: Event) => void;
        onMouseLeave?: (e: Event) => void;
        onFocus?: (e: Event) => void;
        onBlur?: (e: Event) => void;
    };
    popperId: string;
    popperInstance: import("@popperjs/core/lib/types").Instance;
    popperRef: import("vue").Ref<HTMLElement>;
    triggerRef: import("vue").Ref<HTMLElement> | import("vue").Ref<import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    visibility: import("vue").WritableComputedRef<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, string[], string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    arrowOffset: number;
    appendToBody: boolean;
    boundariesPadding: number;
    content: string;
    class: string;
    closeDelay: number;
    cutoff: boolean;
    disabled: boolean;
    effect: import("./popper/defaults").Effect;
    enterable: boolean;
    hideAfter: number;
    manualMode: boolean;
    showAfter: number;
    offset: number;
    placement: import("@popperjs/core/lib/enums").Placement;
    popperClass: string;
    pure: boolean;
    popperOptions: import("@popperjs/core/lib/types").Options;
    showArrow: boolean;
    strategy: import("@popperjs/core/lib/types").PositioningStrategy;
    transition: string;
    trigger: import("./popper/defaults").Trigger;
    tabIndex: string;
    visible: boolean;
} & {}>, {
    arrowOffset: number;
    appendToBody: boolean;
    boundariesPadding: number;
    content: string;
    class: string;
    closeDelay: number;
    cutoff: boolean;
    disabled: boolean;
    effect: import("./popper/defaults").Effect;
    enterable: boolean;
    hideAfter: number;
    manualMode: boolean;
    showAfter: number;
    offset: number;
    placement: import("@popperjs/core/lib/enums").Placement;
    popperClass: string;
    pure: boolean;
    popperOptions: import("@popperjs/core/lib/types").Options;
    showArrow: boolean;
    strategy: import("@popperjs/core/lib/types").PositioningStrategy;
    transition: string;
    trigger: import("./popper/defaults").Trigger;
    tabIndex: string;
    visible: boolean;
}>;
export default _default;
