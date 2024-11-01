import { LanguageCode, Script, TimeStyle, TextStyle } from 'interfaces/Scripts';
interface BlockViewProps {
    scripts: Script[];
    currentScriptIndex: number;
    selectedLanguages: LanguageCode[];
    seekTo: (timeInSeconds: number) => void;
    onClickScript: (script: Script, index: number) => void;
    onSelectWord: (word: string, script: Script, index: number) => void;
    timeStyle?: TimeStyle;
    textStyle?: TextStyle;
}
export declare function BlockView({ scripts, currentScriptIndex, selectedLanguages, seekTo, onClickScript, onSelectWord, timeStyle, textStyle, }: BlockViewProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=BlockView.d.ts.map