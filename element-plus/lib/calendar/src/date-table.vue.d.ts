import { PropType } from 'vue';
import dayjs, { Dayjs } from 'dayjs';
export declare const getPrevMonthLastDays: (date: Dayjs, amount: any) => number[];
export declare const getMonthDays: (date: Dayjs) => number[];
declare const _default: import("vue").DefineComponent<{
    selectedDay: {
        type: typeof dayjs.Dayjs;
    };
    range: {
        type: PropType<dayjs.Dayjs[]>;
    };
    date: {
        type: typeof dayjs.Dayjs;
    };
    hideHeader: {
        type: BooleanConstructor;
    };
}, {
    isInRange: import("vue").ComputedRef<number>;
    weekDays: import("vue").ComputedRef<any>;
    rows: import("vue").ComputedRef<any[]>;
    getCellClass: ({ text, type }: {
        text: any;
        type: any;
    }) => any[];
    pickDay: ({ text, type }: {
        text: any;
        type: any;
    }) => void;
    getSlotData: ({ text, type }: {
        text: any;
        type: any;
    }) => {
        isSelected: boolean;
        type: string;
        day: string;
        date: Date;
    };
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "pick"[], "pick", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{} & {
    selectedDay?: dayjs.Dayjs;
    range?: dayjs.Dayjs[];
    date?: dayjs.Dayjs;
    hideHeader?: boolean;
}>, {}>;
export default _default;
