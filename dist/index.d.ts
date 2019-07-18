// Generated by dts-bundle v0.7.3
// Dependencies for this module:
//   ../react
//   ../styled-components

declare module 'hrb-temaki' {
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
    export const colors: {
        primary: {
            default: string;
            N10: string;
            N20: string;
            N30: string;
            N40: string;
            N50: string;
            N60: string;
            N70: string;
            N80: string;
            N90: string;
            N95: string;
            P10: string;
            P20: string;
            P30: string;
            P40: string;
            P50: string;
            P60: string;
            P70: string;
            P80: string;
            P90: string;
        };
        white: string;
        utility: {
            red: string;
        };
        text: string;
    };
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
        L1: string;
        L2: string;
        L3: string;
        L4: string;
        L5: string;
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

