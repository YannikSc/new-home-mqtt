import { ComputedRef } from 'vue';
import { ISliderInitData, ISliderProps, Stops } from './Slider';
export declare const useStops: (props: ISliderProps, initData: ISliderInitData, minValue: ComputedRef<number>, maxValue: ComputedRef<number>) => Stops;
