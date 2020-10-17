declare const defineGetter: (obj: Record<string, any>, prop: string, value: any, defaultValue?: any) => () => void;
export default defineGetter;
