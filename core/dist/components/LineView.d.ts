import { LanguageCode, Script, TextStyle } from '../interfaces/Scripts';
interface LineViewProps<T extends string = LanguageCode> {
    scripts: Script<T>[];
    selectedLanguages: T[];
    currentScriptIndex: number;
    seekTo: (timeInSeconds: number) => void;
    onSelectWord: (word: string, script: Script<T>, index: number) => void;
    textStyle?: TextStyle;
    PrevButton?: JSX.Element;
    NextButton?: JSX.Element;
}
export declare function LineView<T extends string = LanguageCode>({ scripts, selectedLanguages, currentScriptIndex, seekTo, onSelectWord, textStyle, PrevButton, NextButton, }: LineViewProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineView.d.ts.map