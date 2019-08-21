// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../~/components/Input/index
//   ../~/components/SegmentedControl/index
//   ../react
//   ../styled-components

declare module 'hrb-temaki' {
    import * as _Input from '~/components/Input/index';
    import * as _SegmentedControl from '~/components/SegmentedControl/index';
    import { RequiredThemeProps as _RequiredThemeProps } from 'hrb-temaki/modules/theme';
    export const Text: import("react").FunctionComponent<{}>;
    export const Icon: (props: {
        svg: string;
        size: string;
        color?: string | undefined;
        className?: string | undefined;
    }) => JSX.Element;
    export const Checkbox: import("react").NamedExoticComponent<{
        text?: string | undefined;
        onClick?: ((e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void) | undefined;
        checked?: boolean | undefined;
        indeterminate?: boolean | undefined;
    }>;
    export const Input: import("react").NamedExoticComponent<({
        type?: string | undefined;
        name?: string | undefined;
        onBlur?: ((e: import("react").FocusEvent<HTMLInputElement>) => void) | undefined;
        onChangeNative?: ((e: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
        placeholder?: string | undefined;
        errored?: boolean | undefined;
    } & {
        format: "text";
        value?: _Input.StringValue;
        onChange?: ((value: _Input.StringValue) => void) | undefined;
    }) | ({
        type?: string | undefined;
        name?: string | undefined;
        onBlur?: ((e: import("react").FocusEvent<HTMLInputElement>) => void) | undefined;
        onChangeNative?: ((e: import("react").ChangeEvent<HTMLInputElement>) => void) | undefined;
        placeholder?: string | undefined;
        errored?: boolean | undefined;
    } & {
        format: "number";
        value?: _Input.NumberValue;
        onChange?: ((value: _Input.NumberValue) => void) | undefined;
    })>;
    export const Button: import("react").FunctionComponent<({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
        colorType?: "primary" | undefined;
    } & {
        type: "box";
        height?: string | undefined;
        width?: string | undefined;
    }) | ({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
        colorType?: "primary" | undefined;
    } & {
        type: "circle";
        svg?: string | undefined;
    }) | ({
        onClick?: ((e: import("react").MouseEvent<HTMLButtonElement, MouseEvent>) => void | Promise<void>) | undefined;
        colorType?: "primary" | undefined;
    } & {
        type: "text";
        svg?: string | undefined;
    })>;
    export const buttonShapeType: {
        box: "box";
        circle: "circle";
        text: "text";
    };
    export const Toast: import("react").NamedExoticComponent<{
        label: string;
        text?: string | undefined;
        type: "info" | "warning";
    }>;
    export const SegmentedControl: import("react").NamedExoticComponent<_SegmentedControl.Props>;
    export type SegmentedControlItem = _SegmentedControl.Item;
    export const Tooltip: import("react").NamedExoticComponent<{
        text: string;
        direction?: "top" | "right" | "bottom" | "left" | undefined;
    }>;
    export const RadioButton: import("react").NamedExoticComponent<{
        text: string;
        onClick: (e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
        checked?: boolean | undefined;
    }>;
    export const icons: {
        AddIcon: string;
        AnalyzeIcon: string;
        ArrowDown: string;
        Attachment: string;
        Avatar: string;
        BlackBoard: string;
        Calendar: string;
        CheckBoxAll: string;
        CheckBoxOn: string;
        CheckBoxOff: string;
        ChevronUp: string;
        ChevronDown: string;
        ChevronLeft: string;
        ChevronRight: string;
        Close: string;
        Company: string;
        Copy: string;
        Delete: string;
        Download: string;
        Drag: string;
        Dragdrop: string;
        DropdownOff: string;
        DropdownOn: string;
        Edit: string;
        Event: string;
        Excel: string;
        FilterApply: string;
        Filters: string;
        GlobalMenu: string;
        Group: string;
        Hamburger: string;
        Home: string;
        Index: string;
        Information: string;
        Key: string;
        Like: string;
        Link: string;
        List: string;
        Lock: string;
        MenuH: string;
        MenuV: string;
        MoveDown: string;
        MoveUp: string;
        Notifiacation: string;
        Phone: string;
        Pin: string;
        RadioOff: string;
        RadioOn: string;
        Redo: string;
        Refresh: string;
        Remove: string;
        Search: string;
        Settings: string;
        SingleCheck: string;
        Sort: string;
        SortList: string;
        SortUpDown: string;
        SortItems: string;
        Staff: string;
        Tag: string;
        Text: string;
        Time: string;
        Transition: string;
        TreeToggle: string;
        Undo: string;
        Url: string;
        Warning: string;
    };
    export const defaultTheme: _RequiredThemeProps;
    export type RequiredThemeProps = _RequiredThemeProps;
    export const Switch: import("react").NamedExoticComponent<{
        onClick: (e: import("react").MouseEvent<HTMLDivElement, MouseEvent>) => void;
        checked: boolean;
        text: {
            on: string;
            off: string;
        };
    }>;
    export const Textarea: import("react").NamedExoticComponent<{
        value?: string | undefined;
        placeholder?: string | undefined;
        minRows?: number | undefined;
        maxRows?: number | undefined;
        errored?: boolean | undefined;
        onChange?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
        onFocus?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
        onBlur?: ((e: import("react").ChangeEvent<HTMLTextAreaElement>) => void) | undefined;
    }>;
    export const DropdownSingle: import("react").NamedExoticComponent<{
        placeholder: string;
        items: import("./components/DropdownSingle/ItemList").Item[];
        selected: string;
        isError: boolean;
        width: number;
        onClickItem: (text: string) => void;
    }>;
    export const DropdownMultiple: import("react").NamedExoticComponent<{
        placeholder: string;
        items: import("./components/DropdownMultiple/itemList").Item[];
        selected: string[];
        isError: boolean;
        width: number;
        onClickItem: (text: string) => void;
    }>;
    export const FileUploader: import("react").NamedExoticComponent<{
        onChange: (file: File) => void;
        onClick: (e: import("react").MouseEvent<Element, MouseEvent>) => void;
        onDragOver: (file: File) => void;
        onDrop: (file: File) => void;
        accept?: string | undefined;
    }>;
}

declare module 'hrb-temaki/modules/theme' {
    import * as React from 'react';
    import * as styledComponents from 'styled-components';
    export type RequiredThemeColors = {
        primary: {
            default: string;
            N20: string;
            N40: string;
            N60: string;
            N80: string;
            N95: string;
            P20: string;
            P40: string;
            P60: string;
            P80: string;
            P95: string;
        };
        grayScale: {
            S0: string;
            S5: string;
            S10: string;
            S20: string;
            S30: string;
            S40: string;
            S50: string;
            S60: string;
            S70: string;
            S80: string;
            S90: string;
            S100: string;
        };
        utilities: {
            red: string;
            blue: string;
            highlightGreen: string;
            paleRed: string;
            paleGreen: string;
            paleBlue: string;
        };
        text: {
            default: string;
        };
    };
    export type RequiredThemeShadows = {
        boxShadow: {
            L1: string;
            L2: string;
            L3: string;
            L4: string;
            L5: string;
        };
        dropShadow: {
            L1: string;
            L2: string;
            L3: string;
            L4: string;
            L5: string;
        };
    };
    export type RequiredThemeTextSize = {
        pc: RequiredThemeTextSizePC;
        sp: RequiredThemeTextSizeSP;
    };
    export type RequiredThemeTextSizePC = {
        body: {
            default: string;
            L: string;
            XL: string;
            S: string;
        };
        heading: {
            H1: string;
            H2: string;
            H3: string;
            H4: string;
            H5: string;
            H6: string;
        };
    };
    export type RequiredThemeTextSizeSP = {
        body: {
            default: string;
            L: string;
            XL: string;
            S: string;
        };
        heading: {
            H1: string;
            H2: string;
            H3: string;
            H4: string;
            H5: string;
            H6: string;
        };
    };
    export type RequiredThemeProps = {
        colors: RequiredThemeColors;
        shadows: RequiredThemeShadows;
        typography: RequiredThemeTextSize;
    };
    export const defaultTheme: RequiredThemeProps;
    const styled: styledComponents.ThemedBaseStyledInterface<RequiredThemeProps>, ServerStyleSheet: typeof styledComponents.ServerStyleSheet, StyleSheetManager: typeof styledComponents.StyleSheetManager, createGlobalStyle: <P extends object = {}>(first: styledComponents.CSSObject | TemplateStringsArray | styledComponents.InterpolationFunction<styledComponents.ThemedStyledProps<P, RequiredThemeProps>>, ...interpolations: styledComponents.Interpolation<styledComponents.ThemedStyledProps<P, RequiredThemeProps>>[]) => styledComponents.GlobalStyleComponent<P, RequiredThemeProps>, css: styledComponents.BaseThemedCssFunction<RequiredThemeProps>, isStyledComponent: typeof styledComponents.isStyledComponent, keyframes: (strings: TemplateStringsArray | styledComponents.CSSKeyframes, ...interpolations: styledComponents.SimpleInterpolation[]) => styledComponents.Keyframes, withTheme: styledComponents.BaseWithThemeFnInterface<RequiredThemeProps>;
    const ThemeConsumer: React.ExoticComponent<React.ConsumerProps<RequiredThemeProps>>;
    const ThemeContext: React.Context<RequiredThemeProps>;
    const ThemeProvider: React.ComponentClass<styledComponents.ThemeProviderProps<RequiredThemeProps, RequiredThemeProps>, any>;
    export default styled;
    export { ServerStyleSheet, StyleSheetManager, ThemeConsumer, ThemeContext, ThemeProvider, createGlobalStyle, css, isStyledComponent, keyframes, withTheme };
}

