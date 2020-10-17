import type { PropType } from 'vue';
import type { Placement, PositioningStrategy, Instance as PopperInstance, Options } from '@popperjs/core';
export declare enum Effect {
    DARK = "dark",
    LIGHT = "light"
}
export declare type RefElement = Nullable<HTMLElement>;
export declare type Offset = [number, number] | number;
export type { Placement, PositioningStrategy, PopperInstance, Options };
export declare type TriggerType = 'click' | 'hover' | 'focus' | 'manual';
export declare type Trigger = TriggerType | TriggerType[];
export declare type IPopperOptions = {
    arrowOffset: number;
    boundariesPadding: number;
    class: string;
    closeDelay: number;
    cutoff: boolean;
    disabled: boolean;
    enterable: boolean;
    hideAfter: number;
    manualMode: boolean;
    offset: number;
    placement: Placement;
    popperOptions: Options;
    showAfter: number;
    showArrow: boolean;
    strategy: PositioningStrategy;
    tabIndex: string;
    trigger: Trigger;
    visible: boolean;
};
export declare const DEFAULT_TRIGGER = "hover";
declare const _default: {
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
        type: PropType<Effect>;
        default: Effect;
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
        type: PropType<Placement>;
        default: Placement;
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
        type: PropType<Options>;
        default: () => any;
    };
    showArrow: {
        type: BooleanConstructor;
        default: boolean;
    };
    strategy: {
        type: PropType<PositioningStrategy>;
        default: PositioningStrategy;
    };
    transition: {
        type: StringConstructor;
        default: string;
    };
    trigger: {
        type: PropType<Trigger>;
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
};
export default _default;
