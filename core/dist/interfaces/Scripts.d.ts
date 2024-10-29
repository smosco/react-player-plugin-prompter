export type LanguageCode = 'en' | 'ko' | 'ja' | 'de' | 'fr' | 'es';
export interface Subtitle extends Partial<Record<LanguageCode, string>> {
    startTimeInSecond: number;
    durationInSecond: number;
    highlightedText?: string;
}
export interface ContainerStyle {
    width?: string;
    height?: string;
    padding?: string;
    backgroundColor?: string;
    borderColor?: string;
}
export interface TextStyle {
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    lineHeight?: string;
    activeColor?: string;
}
export interface TimeStyle {
    color?: string;
    fontSize?: string;
    backgroundColor?: string;
    borderRadius?: string;
    padding?: string;
}
//# sourceMappingURL=Scripts.d.ts.map