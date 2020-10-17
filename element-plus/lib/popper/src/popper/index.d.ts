import type { ComponentPublicInstance, SetupContext } from 'vue';
import type { IPopperOptions, PopperInstance } from './defaults';
export declare const DEFAULT_TRIGGER: string[];
export declare const UPDATE_VISIBLE_EVENT = "update:visible";
export default function (props: IPopperOptions, { emit }: SetupContext<string[]>): {
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
    popperInstance: PopperInstance;
    popperRef: import("vue").Ref<HTMLElement>;
    triggerRef: import("vue").Ref<HTMLElement> | import("vue").Ref<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
    visibility: import("vue").WritableComputedRef<boolean>;
};
