import { LanguageCode, Subtitle, TextStyle } from '../interfaces/Scripts';
interface LineViewProps {
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    currentSubtitleIndex: number;
    seekTo: (timeInSeconds: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    textStyle?: TextStyle;
    PrevButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
    NextButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
}
export declare function LineView({ subtitles, selectedLanguages, currentSubtitleIndex, seekTo, onSelectWord, textStyle, PrevButton, NextButton, }: LineViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineView.d.ts.map