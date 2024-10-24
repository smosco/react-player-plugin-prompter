import React from 'react';
import { Subtitle, LanguageCode } from '../interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';

export function TextDisplay({
  subtitle,
  selectedLanguages,
  onSelectWord,
  // 자막 텍스트 스타일링
  textColor,
  textFontSize,
  textFontWeight,
  textLineHeight,
}: {
  subtitle: Subtitle;
  selectedLanguages: LanguageCode[]; // 선택된 언어 배열
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
  // 자막 텍스트 스타일링
  textColor?: string;
  textFontSize?: string;
  textFontWeight?: string;
  textLineHeight?: string;
}) {
  return (
    <div className={styles.textView}>
      {selectedLanguages.map((language) => (
        <p
          key={language}
          // TODO(@smosco): 동적 className이 적용 안됨
          className={styles[`text${language.toUpperCase()}`]}
          style={{
            color: textColor,
            fontSize: textFontSize,
            fontWeight: textFontWeight,
            lineHeight: textLineHeight,
          }}
          onMouseUp={() => {
            const selection = window.getSelection();
            if (selection && selection.toString()) {
              const selectedWord = selection.toString().trim();
              if (selectedWord) {
                // TODO(@smosco): 문장의 index, 문장 내 단어의 index까지 넘겨야할지 고민
                onSelectWord(selectedWord, subtitle, 0);
              }
            }
          }}
        >
          {subtitle[language] || `(${language} 자막이 없어요!)`}
          {/* 선택된 언어가 없을 경우 대비 */}
        </p>
      ))}
    </div>
  );
}
