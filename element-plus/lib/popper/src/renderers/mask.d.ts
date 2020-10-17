import type { VNode } from 'vue';
interface IRenderMaskProps {
    hide: () => void;
}
export default function renderMask(popper: VNode, { hide }: IRenderMaskProps): VNode;
export {};
