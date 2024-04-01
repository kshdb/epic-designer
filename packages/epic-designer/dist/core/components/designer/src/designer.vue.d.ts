import { PageSchema } from '../../../types/epic-designer';
/**
 * 接受一个PageSchema对象作为参数。根据传入的schemas和script属性，更新页面对应的数据
 * @param pageSchema
 */
declare function setData(schema: PageSchema): void;
/**
 * 返回当前页面数据的 PageSchema 对象，包含页面当前的 schemas 和 script 数据。
 */
declare function getData(): PageSchema;
/**
 * 重置页面数据为默认数据。
 */
declare function reset(): void;
declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<{
    disabledZoom: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hiddenHeader: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}, {
    setData: typeof setData;
    getData: typeof getData;
    reset: typeof reset;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("ready" | "save")[], "ready" | "save", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    disabledZoom: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
    hiddenHeader: {
        type: import("vue").PropType<boolean>;
        default: boolean;
    };
}>> & {
    onReady?: ((...args: any[]) => any) | undefined;
    onSave?: ((...args: any[]) => any) | undefined;
}, {
    disabledZoom: boolean;
    hiddenHeader: boolean;
}, {}>, {
    header?(_: {}): any;
    "header-prefix"?(_: {}): any;
    "header-title"?(_: {}): any;
    "header-right-prefix"?(_: {}): any;
    "header-right-action"?(_: {}): any;
    "header-right-suffix"?(_: {}): any;
}>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};