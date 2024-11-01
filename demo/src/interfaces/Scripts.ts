type LanguageCode = 'en' | 'ko' | 'ja' | 'de' | 'fr' | 'es';

type CustomScriptLanguageCode = 'enScript' | 'koScript' | 'frScript';

type Script<T extends string = LanguageCode> = Partial<Record<T, string>> & {
  startTimeInSecond: number;
  durationInSecond: number;
  isHighlighted: boolean;
};

export type { LanguageCode, CustomScriptLanguageCode, Script };
