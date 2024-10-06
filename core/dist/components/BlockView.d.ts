import { LanguageCode, Subtitle } from 'interfaces/Scripts';
interface BlockViewProps {
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    onClickSubtitle: (subtitle: Subtitle, index: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}
export declare function BlockView({ subtitles, selectedLanguages, seekTo, onClickSubtitle, onSelectWord, }: BlockViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockView.d.ts.map