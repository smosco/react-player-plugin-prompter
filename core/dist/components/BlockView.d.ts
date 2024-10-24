import { LanguageCode, Subtitle } from 'interfaces/Scripts';
interface BlockViewProps {
    subtitles: Subtitle[];
    currentSubtitleIndex: number;
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    onClickSubtitle: (subtitle: Subtitle, index: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    timeColor?: string;
    timeFontSize?: string;
    timeBackgroundColor?: string;
    timeBorderRadius?: string;
    timePadding?: string;
    textColor?: string;
    textFontSize?: string;
    textFontWeight?: string;
    textLineHeight?: string;
    activeTextColor?: string;
}
export declare function BlockView({ subtitles, currentSubtitleIndex, selectedLanguages, seekTo, onClickSubtitle, onSelectWord, timeColor, timeFontSize, timeBackgroundColor, timeBorderRadius, timePadding, textColor, textFontSize, textFontWeight, textLineHeight, activeTextColor, }: BlockViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockView.d.ts.map