import type { VNode } from 'vue';
import type { Effect } from '../popper/defaults';
interface IRenderPopperProps {
    name: string;
    effect: Effect;
    popperClass: string;
    popperId: string;
    pure: boolean;
    visibility: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    onAfterEnter: () => void;
    onAfterLeave: () => void;
}
export default function renderPopper(props: IRenderPopperProps, children: VNode[]): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export {};
