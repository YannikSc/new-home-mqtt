declare const makeScroll: (dom: Element, name: 'scrollTop' | 'scrollLeft', offset: number) => Promise<unknown>;
export default makeScroll;
