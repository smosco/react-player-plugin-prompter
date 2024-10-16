import { LanguageCode, Subtitle } from '../interfaces/Scripts';
interface LineViewProps {
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    currentSubtitleIndex: number;
    seekTo: (timeInSeconds: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}
export declare function LineView({ subtitles, selectedLanguages, currentSubtitleIndex, seekTo, onSelectWord, }: LineViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineView.d.ts.map