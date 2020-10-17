import type { INotification, NotificationVM } from './notification';
declare const Notification: INotification;
export declare function close(id: string, userOnClose?: (vm: NotificationVM) => void): void;
export declare function closeAll(): void;
export default Notification;
