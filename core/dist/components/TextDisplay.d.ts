import { Script, LanguageCode, TextStyle } from '../interfaces/Scripts';
interface TextDisplayProps<T extends string = LanguageCode> {
    script: Script<T>;
    selectedLanguages: T[];
    onSelectWord: (word: string, script: Script<T>, index: number) => void;
    textStyle?: TextStyle;
}
export declare function TextDisplay<T extends string = LanguageCode>({ script, selectedLanguages, onSelectWord, textStyle, }: TextDisplayProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextDisplay.d.ts.map