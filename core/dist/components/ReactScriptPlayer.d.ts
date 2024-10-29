import { LanguageCode, Subtitle, ContainerStyle, TextStyle, TimeStyle } from '../interfaces/Scripts';
export interface ReactScriptPlayerProps {
    mode: 'line' | 'block';
    subtitles: Subtitle[];
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    currentTime: number;
    onClickSubtitle: (subtitle: Subtitle, index: number) => void;
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    containerStyle?: ContainerStyle;
    textStyle?: TextStyle;
    timeStyle?: TimeStyle;
    PrevButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
    NextButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
}
export declare function ReactScriptPlayer({ mode, subtitles, selectedLanguages, seekTo, currentTime, onClickSubtitle, onSelectWord, containerStyle, textStyle, timeStyle, PrevButton, NextButton, }: ReactScriptPlayerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactScriptPlayer.d.ts.map