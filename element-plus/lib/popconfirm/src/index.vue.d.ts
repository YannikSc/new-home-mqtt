declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    confirmButtonText: {
        type: StringConstructor;
        default: string;
    };
    cancelButtonText: {
        type: StringConstructor;
        default: string;
    };
    confirmButtonType: {
        type: StringConstructor;
        default: string;
    };
    cancelButtonType: {
        type: StringConstructor;
        default: string;
    };
    icon: {
        type: StringConstructor;
        default: string;
    };
    iconColor: {
        type: StringConstructor;
        default: string;
    };
    hideIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    visible: import("vue").Ref<boolean>;
    confirm: () => void;
    cancel: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("confirm" | "cancel")[], "confirm" | "cancel", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    confirmButtonText: string;
    cancelButtonText: string;
    confirmButtonType: string;
    cancelButtonType: string;
    icon: string;
    iconColor: string;
    hideIcon: boolean;
} & {
    title?: string;
}>, {
    confirmButtonText: string;
    cancelButtonText: string;
    confirmButtonType: string;
    cancelButtonType: string;
    icon: string;
    iconColor: string;
    hideIcon: boolean;
}>;
export default _default;
