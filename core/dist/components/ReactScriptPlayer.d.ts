import { LanguageCode, Subtitle } from '../interfaces/Scripts';
export interface ReactScriptPlayerProps {
    mode: 'line' | 'block';
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    onClickSubtitle: (subtitle: Subtitle, index: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
}
export declare function ReactScriptPlayer({ mode, subtitles, selectedLanguages, seekTo, onClickSubtitle, onSelectWord, }: ReactScriptPlayerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactScriptPlayer.d.ts.map