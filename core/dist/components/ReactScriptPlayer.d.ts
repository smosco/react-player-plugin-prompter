import { LanguageCode, Script, ContainerStyle, TextStyle, TimeStyle } from '../interfaces/Scripts';
export interface ReactScriptPlayerProps<T extends string = LanguageCode> {
    mode: 'line' | 'block';
    scripts: Script<T>[];
    selectedLanguages: T[];
    seekTo: (timeInSeconds: number) => void;
    currentTime: number;
    onClickScript: (script: Script<T>, index: number) => void;
    onSelectWord: (word: string, script: Script<T>, index: number) => void;
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
export declare function ReactScriptPlayer({ mode, scripts, selectedLanguages, seekTo, currentTime, onClickScript, onSelectWord, containerStyle, textStyle, timeStyle, PrevButton, NextButton, }: ReactScriptPlayerProps): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactScriptPlayer.d.ts.map