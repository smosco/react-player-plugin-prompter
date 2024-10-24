import { LanguageCode, Subtitle } from '../interfaces/Scripts';
interface LineViewProps {
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    currentSubtitleIndex: number;
    seekTo: (timeInSeconds: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    textColor?: string;
    textFontSize?: string;
    textFontWeight?: string;
    textLineHeight?: string;
    PrevButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
    NextButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
}
export declare function LineView({ subtitles, selectedLanguages, currentSubtitleIndex, seekTo, onSelectWord, textColor, textFontSize, textFontWeight, textLineHeight, PrevButton, NextButton, }: LineViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineView.d.ts.map