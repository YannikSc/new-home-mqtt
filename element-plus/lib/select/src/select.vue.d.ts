/// <reference types="lodash" />
declare const _default: import("vue").DefineComponent<{
    name: StringConstructor;
    id: StringConstructor;
    modelValue: {
        type: (StringConstructor | ArrayConstructor | NumberConstructor)[];
    };
    autocomplete: {
        type: StringConstructor;
        default: string;
    };
    automaticDropdown: BooleanConstructor;
    size: StringConstructor;
    disabled: BooleanConstructor;
    clearable: BooleanConstructor;
    filterable: BooleanConstructor;
    allowCreate: BooleanConstructor;
    loading: BooleanConstructor;
    popperClass: StringConstructor;
    remote: BooleanConstructor;
    loadingText: StringConstructor;
    noMatchText: StringConstructor;
    noDataText: StringConstructor;
    remoteMethod: FunctionConstructor;
    filterMethod: FunctionConstructor;
    multiple: BooleanConstructor;
    multipleLimit: {
        type: NumberConstructor;
        default: number;
    };
    placeholder: {
        type: StringConstructor;
        default: string;
    };
    defaultFirstOption: BooleanConstructor;
    reserveKeyword: BooleanConstructor;
    valueKey: {
        type: StringConstructor;
        default: string;
    };
    collapseTags: BooleanConstructor;
    popperAppendToBody: {
        type: BooleanConstructor;
        default: boolean;
    };
    clearIcon: {
        type: StringConstructor;
        default: string;
    };
}, {
    selectSize: import("vue").ComputedRef<any>;
    readonly: import("vue").ComputedRef<any>;
    handleResize: () => void;
    collapseTagSize: import("vue").ComputedRef<"small" | "mini">;
    debouncedOnInputChange: import("lodash").DebouncedFunc<() => void>;
    debouncedQueryChange: import("lodash").DebouncedFunc<(e: any) => void>;
    deletePrevTag: (e: any) => void;
    deleteTag: (event: any, tag: any) => void;
    deleteSelected: (event: any) => void;
    handleOptionSelect: (option: any, byClick: any) => void;
    scrollToOption: (option: any) => void;
    inputWidth: import("vue").Ref<number>;
    selected: import("vue").Ref<any>;
    inputLength: import("vue").Ref<number>;
    filteredOptionsCount: import("vue").Ref<number>;
    visible: import("vue").Ref<boolean>;
    softFocus: import("vue").Ref<boolean>;
    selectedLabel: import("vue").Ref<string>;
    hoverIndex: import("vue").Ref<number>;
    query: import("vue").Ref<string>;
    inputHovering: import("vue").Ref<boolean>;
    currentPlaceholder: import("vue").Ref<string>;
    menuVisibleOnFocus: import("vue").Ref<boolean>;
    isOnComposition: import("vue").Ref<boolean>;
    isSilentBlur: import("vue").Ref<boolean>;
    options: import("vue").Ref<any[]>;
    resetInputHeight: () => void;
    managePlaceholder: () => void;
    showClose: import("vue").ComputedRef<boolean>;
    selectDisabled: import("vue").ComputedRef<any>;
    iconClass: import("vue").ComputedRef<"" | "arrow-up is-reverse" | "arrow-up">;
    showNewOption: import("vue").ComputedRef<boolean>;
    emptyText: import("vue").ComputedRef<any>;
    toggleLastOptionHitState: (hit?: boolean) => any;
    resetInputState: (e: any) => void;
    handleComposition: (event: any) => void;
    handleMenuEnter: () => void;
    handleFocus: (event: any) => void;
    blur: () => void;
    handleBlur: (event: any) => void;
    handleClearClick: (event: any) => void;
    doDestroy: () => void;
    handleClose: () => void;
    toggleMenu: () => void;
    selectOption: () => void;
    getValueKey: (item: any) => any;
    navigateOptions: (direction: any) => void;
    dropMenuVisible: import("vue").ComputedRef<boolean>;
    reference: any;
    input: any;
    popper: any;
    tags: any;
    selectWrapper: import("vue").Ref<HTMLElement>;
    scrollbar: any;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("remove-tag" | "clear" | "change" | "visible-change" | "focus" | "blur" | "update:modelValue")[], "remove-tag" | "clear" | "change" | "visible-change" | "focus" | "blur" | "update:modelValue", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    autocomplete: string;
    multipleLimit: number;
    placeholder: string;
    valueKey: string;
    popperAppendToBody: boolean;
    clearIcon: string;
} & {
    name?: string;
    id?: string;
    modelValue?: string | number | unknown[];
    automaticDropdown?: boolean;
    size?: string;
    disabled?: boolean;
    clearable?: boolean;
    filterable?: boolean;
    allowCreate?: boolean;
    loading?: boolean;
    popperClass?: string;
    remote?: boolean;
    loadingText?: string;
    noMatchText?: string;
    noDataText?: string;
    remoteMethod?: Function;
    filterMethod?: Function;
    multiple?: boolean;
    defaultFirstOption?: boolean;
    reserveKeyword?: boolean;
    collapseTags?: boolean;
}>, {
    autocomplete: string;
    multipleLimit: number;
    placeholder: string;
    valueKey: string;
    popperAppendToBody: boolean;
    clearIcon: string;
}>;
export default _default;