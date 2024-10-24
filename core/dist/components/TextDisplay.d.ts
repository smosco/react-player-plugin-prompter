import { Subtitle, LanguageCode } from '../interfaces/Scripts';
export declare function TextDisplay({ subtitle, selectedLanguages, onSelectWord, textColor, textFontSize, textFontWeight, textLineHeight, }: {
    subtitle: Subtitle;
    selectedLanguages: LanguageCode[];
    onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
    textColor?: string;
    textFontSize?: string;
    textFontWeight?: string;
    textLineHeight?: string;
}): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=TextDisplay.d.ts.map