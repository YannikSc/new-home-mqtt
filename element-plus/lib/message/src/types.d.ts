import type { VNode } from 'vue';
export interface IMessageHandle {
    close: () => void;
}
export interface IMessage {
    (options?: IMessageOptions | string): IMessageHandle;
    closeAll(): void;
}
export declare type IMessageOptions = {
    customClass?: string;
    center?: boolean;
    dangerouslyUseHTMLString?: boolean;
    duration?: number;
    iconClass?: string;
    id?: string;
    message?: string | VNode;
    offset?: number;
    onClose?: () => void;
    showClose?: boolean;
    type?: 'success' | 'warning' | 'info' | 'error' | '';
    zIndex?: number;
};
export declare type MessageVM = VNode;
declare type MessageQueueItem = {
    vm: MessageVM;
    $el: HTMLElement;
};
export declare type MessageQueue = Array<MessageQueueItem>;
export {};
