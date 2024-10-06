type LanguageCode = 'en' | 'ko' | 'ja' | 'de' | 'fr' | 'es';

interface Subtitle extends Partial<Record<LanguageCode, string>> {
  startTimeInSecond: number;
  durationInSecond: number;
  highlightedText?: string;
}

export type { LanguageCode, Subtitle };
