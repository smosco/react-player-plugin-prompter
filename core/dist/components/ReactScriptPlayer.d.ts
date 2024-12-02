import { LanguageCode, Script, ContainerStyle, TextStyle, TimeStyle } from '../interfaces/Scripts';
import { Dispatch, SetStateAction } from 'react';
export interface ReactScriptPlayerProps<T extends string = LanguageCode> {
    mode: 'line' | 'block';
    scripts: Script<T>[];
    selectedLanguages: T[];
    seekTo: (timeInSeconds: number) => void;
    getCurrentTime: () => number;
    onClickScript: (script: Script<T>, index: number) => void;
    onSelectWord: (word: string, script: Script<T>, index: number) => void;
    containerStyle?: ContainerStyle;
    textStyle?: TextStyle;
    timeStyle?: TimeStyle;
    PrevButton?: JSX.Element;
    NextButton?: JSX.Element;
    FocusButton?: ({ isFocused, setIsFocused, }: {
        isFocused: boolean;
        setIsFocused: Dispatch<SetStateAction<boolean>>;
    }) => JSX.Element;
}
export declare function ReactScriptPlayer<T extends string = LanguageCode>({ mode, scripts, selectedLanguages, seekTo, getCurrentTime, onClickScript, onSelectWord, containerStyle, textStyle, timeStyle, PrevButton, NextButton, FocusButton, }: ReactScriptPlayerProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=ReactScriptPlayer.d.ts.map