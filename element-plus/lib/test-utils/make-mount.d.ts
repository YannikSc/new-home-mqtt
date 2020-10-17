declare const makeMount: <C, O, E>(element: C, defaultOptions: O) => (props?: O | E | (E & O)) => import("@vue/test-utils").VueWrapper<import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, Record<string, any>, import("vue").VNodeProps, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
export default makeMount;
