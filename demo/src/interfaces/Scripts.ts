type LanguageCode = 'en' | 'ko' | 'ja' | 'de' | 'fr' | 'es';

interface Subtitle extends Partial<Record<LanguageCode, string>> {
  startTimeInSecond: number;
  durationInSecond: number;
  isHighlighted: boolean;
}

export type { LanguageCode, Subtitle };
