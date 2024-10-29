import { Subtitle, LanguageCode, TextStyle } from '../interfaces/Scripts';
interface TextDisplayProps {
    subtitle: Subtitle;
    selectedLanguages: LanguageCode[];
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    textStyle?: TextStyle;
}
export declare function TextDisplay({ subtitle, selectedLanguages, onSelectWord, textStyle, }: TextDisplayProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=TextDisplay.d.ts.map