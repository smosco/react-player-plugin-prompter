type LanguageCode = 'en' | 'ko' | 'ja' | 'de' | 'fr' | 'es';
type Script<T extends string = LanguageCode> = Partial<Record<T, string>> & {
    startTimeInSecond: number;
    durationInSecond: number;
    isHighlighted: boolean;
};
interface ContainerStyle {
    width?: string;
    height?: string;
    padding?: string;
    backgroundColor?: string;
    borderColor?: string;
}
interface TextStyle {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    activeColor?: string;
}
interface TimeStyle {
    color?: string;
    fontSize?: string;
    backgroundColor?: string;
    borderRadius?: string;
    padding?: string;
}
export type { LanguageCode, Script, ContainerStyle, TextStyle, TimeStyle };
//# sourceMappingURL=Scripts.d.ts.map