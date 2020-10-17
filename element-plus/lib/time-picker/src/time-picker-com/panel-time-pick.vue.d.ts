import { PropType } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
declare const _default: import("vue").DefineComponent<{
    visible: {
        type: BooleanConstructor;
        default: boolean;
    };
    datetimeRole: {
        type: StringConstructor;
    };
    parsedValue: {
        type: PropType<string | dayjs.Dayjs>;
    };
    arrowControl: {
        type: BooleanConstructor;
        default: boolean;
    };
    format: {
        type: StringConstructor;
        default: string;
    };
}, {
    onSetOption: (e: any) => void;
    t: (path: string, option?: any) => string;
    handleConfirm: (visible: boolean, first: any) => void;
    handleChange: (_date: Dayjs) => void;
    setSelectionRange: (start: any, end: any) => void;
    amPmMode: import("vue").ComputedRef<"" | "A" | "a">;
    showSeconds: import("vue").ComputedRef<boolean>;
    handleCancel: () => void;
    disabledHours: any;
    disabledMinutes: any;
    disabledSeconds: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("pick" | "select-range" | "set-picker-option")[], "pick" | "select-range" | "set-picker-option", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    visible: boolean;
    arrowControl: boolean;
    format: string;
} & {
    datetimeRole?: string;
    parsedValue?: string | dayjs.Dayjs;
}>, {
    visible: boolean;
    arrowControl: boolean;
    format: string;
}>;
export default _default;
