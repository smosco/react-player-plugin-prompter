import { LanguageCode, Subtitle, TimeStyle, TextStyle } from 'interfaces/Scripts';
interface BlockViewProps {
    subtitles: Subtitle[];
    currentSubtitleIndex: number;
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    onClickSubtitle: (subtitle: Subtitle, index: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    timeStyle?: TimeStyle;
    textStyle?: TextStyle;
}
export declare function BlockView({ subtitles, currentSubtitleIndex, selectedLanguages, seekTo, onClickSubtitle, onSelectWord, timeStyle, textStyle, }: BlockViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockView.d.ts.map