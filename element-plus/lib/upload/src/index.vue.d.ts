import ajax from './ajax';
import type { PropType } from 'vue';
import type { ListType, UploadFile, FileHandler, FileResultHandler } from './upload';
declare const _default: import("vue").DefineComponent<{
    action: {
        type: StringConstructor;
        required: true;
    };
    headers: {
        type: PropType<Headers>;
        default: () => {};
    };
    data: {
        type: ObjectConstructor;
        default: () => {};
    };
    multiple: {
        type: BooleanConstructor;
        default: boolean;
    };
    name: {
        type: StringConstructor;
        default: string;
    };
    drag: {
        type: BooleanConstructor;
        default: boolean;
    };
    withCredentials: BooleanConstructor;
    showFileList: {
        type: BooleanConstructor;
        default: boolean;
    };
    accept: {
        type: StringConstructor;
        default: string;
    };
    type: {
        type: StringConstructor;
        default: string;
    };
    beforeUpload: {
        type: PropType<FileHandler<void>>;
        default: () => void;
    };
    beforeRemove: {
        type: PropType<FileHandler<boolean>>;
        default: () => void;
    };
    onRemove: {
        type: PropType<FileHandler<void>>;
        default: () => void;
    };
    onChange: {
        type: PropType<FileHandler<void>>;
        default: () => void;
    };
    onPreview: {
        type: PropType<() => void>;
        default: () => void;
    };
    onSuccess: {
        type: PropType<FileResultHandler<any>>;
        default: () => void;
    };
    onProgress: {
        type: PropType<FileResultHandler<ProgressEvent<EventTarget>>>;
        default: () => void;
    };
    onError: {
        type: PropType<FileResultHandler<Error>>;
        default: () => void;
    };
    fileList: {
        type: PropType<UploadFile[]>;
        default: () => UploadFile[];
    };
    autoUpload: {
        type: BooleanConstructor;
        default: boolean;
    };
    listType: {
        type: PropType<ListType>;
        default: ListType;
    };
    httpRequest: {
        type: FunctionConstructor;
        default: typeof ajax;
    };
    disabled: BooleanConstructor;
    limit: {
        type: PropType<number>;
        default: any;
    };
    onExceed: {
        type: FunctionConstructor;
        default: () => () => void;
    };
}, {
    dragOver: import("vue").Ref<boolean>;
    draging: import("vue").Ref<boolean>;
    handleError: (err: Error, rawFile: import("./upload").ElFile) => void;
    handleProgress: (ev: import("./upload").ElUploadProgressEvent, rawFile: import("./upload").ElFile) => void;
    handleRemove: (file: UploadFile, raw: import("./upload").ElFile) => void;
    handleStart: (rawFile: import("./upload").ElFile) => void;
    handleSuccess: (res: any, rawFile: import("./upload").ElFile) => void;
    uploadDisabled: import("vue").ComputedRef<boolean>;
    uploadFiles: import("vue").Ref<{
        name: string;
        percentage?: number;
        status: import("./upload").UploadStatus;
        size: number;
        response?: unknown;
        uid: number;
        url?: string;
        raw: {
            uid: number;
            readonly lastModified: number;
            readonly name: string;
            readonly size: number;
            readonly type: string;
            arrayBuffer: () => Promise<ArrayBuffer>;
            slice: (start?: number, end?: number, contentType?: string) => Blob;
            stream: () => ReadableStream<any>;
            text: () => Promise<string>;
        };
    }[]>;
    uploadRef: import("vue").Ref<{
        abort: (file: UploadFile) => void;
        upload: (file: import("./upload").ElFile) => void;
    }>;
    submit: () => void;
    clearFiles: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    action: string;
    headers: Headers;
    data: Record<string, any>;
    multiple: boolean;
    name: string;
    drag: boolean;
    showFileList: boolean;
    accept: string;
    type: string;
    beforeUpload: FileHandler<void>;
    beforeRemove: FileHandler<boolean>;
    onRemove: FileHandler<void>;
    onChange: FileHandler<void>;
    onPreview: () => void;
    onSuccess: FileResultHandler<any>;
    onProgress: FileResultHandler<ProgressEvent<EventTarget>>;
    onError: FileResultHandler<Error>;
    fileList: UploadFile[];
    autoUpload: boolean;
    listType: ListType;
    httpRequest: Function;
    limit: number;
    onExceed: Function;
} & {
    withCredentials?: boolean;
    disabled?: boolean;
}>, {
    headers: Headers;
    data: Record<string, any>;
    multiple: boolean;
    name: string;
    drag: boolean;
    showFileList: boolean;
    accept: string;
    type: string;
    beforeUpload: FileHandler<void>;
    beforeRemove: FileHandler<boolean>;
    onRemove: FileHandler<void>;
    onChange: FileHandler<void>;
    onPreview: () => void;
    onSuccess: FileResultHandler<any>;
    onProgress: FileResultHandler<ProgressEvent<EventTarget>>;
    onError: FileResultHandler<Error>;
    fileList: UploadFile[];
    autoUpload: boolean;
    listType: ListType;
    httpRequest: Function;
    limit: number;
    onExceed: Function;
}>;
export default _default;