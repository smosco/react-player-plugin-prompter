import { Script, LanguageCode, TextStyle } from '../interfaces/Scripts';
interface TextDisplayProps {
    script: Script;
    selectedLanguages: LanguageCode[];
    onSelectWord: (word: string, script: Script, index: number) => void;
    textStyle?: TextStyle;
}
export declare function TextDisplay({ script, selectedLanguages, onSelectWord, textStyle, }: TextDisplayProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextDisplay.d.ts.map