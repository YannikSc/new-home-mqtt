import type { VNode } from 'vue';
interface IRenderTriggerProps extends Record<string, unknown> {
    ref: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseLeave?: () => void;
    onFocus?: () => void;
}
export default function renderTrigger(trigger: VNode[], extraProps: IRenderTriggerProps): VNode<import("vue").RendererNode, import("vue").RendererElement, {
    [key: string]: any;
}>;
export {};
