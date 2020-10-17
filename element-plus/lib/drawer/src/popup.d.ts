import { IDrawerWithPopupOption, IDrawerPopupOption } from './drawer';
declare const usePopup: ({ props, $el, vVm }: IDrawerPopupOption) => {
    popupData: {
        opened: boolean;
        bodyPaddingRight: any;
        computedBodyPaddingRight: number;
        withoutHiddenClass: boolean;
        rendered: boolean;
    };
    open: (options?: Partial<IDrawerWithPopupOption>) => void;
};
export default usePopup;
