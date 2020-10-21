import dayjs from 'dayjs';
import { PropType } from 'vue';
declare const _default: import("vue").DefineComponent<{
    disabledDate: {
        type: PropType<(_: Date) => void>;
    };
    selectionMode: {
        type: StringConstructor;
        default: string;
    };
    minDate: {
        type: typeof dayjs.Dayjs;
    };
    maxDate: {
        type: typeof dayjs.Dayjs;
    };
    date: {
        type: typeof dayjs.Dayjs;
    };
    parsedValue: {
        type: typeof dayjs.Dayjs;
    };
    rangeState: {
        type: ObjectConstructor;
        default: () => {
            endDate: any;
            selecting: boolean;
        };
    };
}, {
    handleMouseMove: (event: any) => void;
    handleMonthTableClick: (event: any) => void;
    rows: import("vue").ComputedRef<any[][]>;
    getCellStyle: (cell: any) => any;
    t: (path: string, option?: any) => string;
    months: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("changerange" | "pick" | "select")[], "changerange" | "pick" | "select", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    selectionMode: string;
    rangeState: Record<string, any>;
} & {
    disabledDate?: (_: Date) => void;
    minDate?: dayjs.Dayjs;
    maxDate?: dayjs.Dayjs;
    date?: dayjs.Dayjs;
    parsedValue?: dayjs.Dayjs;
}>, {
    selectionMode: string;
    rangeState: Record<string, any>;
}>;
export default _default;