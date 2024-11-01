import { LanguageCode, Script, TextStyle } from '../interfaces/Scripts';
interface LineViewProps {
    scripts: Script[];
    selectedLanguages: LanguageCode[];
    currentScriptIndex: number;
    seekTo: (timeInSeconds: number) => void;
    onSelectWord: (word: string, script: Script, index: number) => void;
    textStyle?: TextStyle;
    PrevButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
    NextButton?: ({ onClick }: {
        onClick: () => void;
    }) => JSX.Element;
}
export declare function LineView({ scripts, selectedLanguages, currentScriptIndex, seekTo, onSelectWord, textStyle, PrevButton, NextButton, }: LineViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=LineView.d.ts.map