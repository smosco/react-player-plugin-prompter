import React from 'react';
import { LanguageCode, Script, TimeStyle, TextStyle } from 'interfaces/Scripts';
interface BlockViewProps<T extends string = LanguageCode> {
    scripts: Script<T>[];
    currentScriptIndex: number;
    selectedLanguages: T[];
    seekTo: (timeInSeconds: number) => void;
    onClickScript: (script: Script<T>, index: number) => void;
    onSelectWord: (word: string, script: Script<T>, index: number) => void;
    timeStyle?: TimeStyle;
    textStyle?: TextStyle;
    FocusButton?: ({ isFocused, setIsFocused, }: {
        isFocused: boolean;
        setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
    }) => JSX.Element;
}
export declare function BlockView<T extends string = LanguageCode>({ scripts, currentScriptIndex, selectedLanguages, seekTo, onClickScript, onSelectWord, timeStyle, textStyle, FocusButton, }: BlockViewProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockView.d.ts.map