import { LanguageCode, Subtitle } from '../interfaces/Scripts';
export interface ReactScriptPlayerProps {
    mode: 'line' | 'block';
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    currentTime: number;
    onClickSubtitle: (subtitle: Subtitle, index: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    containerWidth?: string;
    containerHeight?: string;
    containerPadding?: string;
    containerBackgroundColor?: string;
    containerBorderColor?: string;
    textColor?: string;
    textFontSize?: string;
    textFontWeight?: string;
    textLineHeight?: string;
    activeTextColor?: string;
    timeColor?: string;
    timeFontSize?: string;
    timeBackgroundColor?: string;
    timeBorderRadius?: string;
    timePadding?: string;
    PrevButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
    NextButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
}
export declare function ReactScriptPlayer({ mode, subtitles, selectedLanguages, seekTo, currentTime, onClickSubtitle, onSelectWord, containerWidth, containerHeight, containerPadding, containerBackgroundColor, containerBorderColor, textColor, textFontSize, textFontWeight, textLineHeight, activeTextColor, timeColor, timeFontSize, timeBackgroundColor, timeBorderRadius, timePadding, PrevButton, NextButton, }: ReactScriptPlayerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactScriptPlayer.d.ts.map