import React from 'react';
import { Subtitle, LanguageCode, TextStyle } from '../interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';

interface TextDisplayProps {
  subtitle: Subtitle;
  selectedLanguages: LanguageCode[];
  onSelectWord: (word: string, subtitle: Subtitle, index: number) => void;
  textStyle?: TextStyle;
}

export function TextDisplay({
  subtitle,
  selectedLanguages,
  onSelectWord,
  textStyle,
}: TextDisplayProps) {
  return (
    <div
      className={`${styles.textView} ${subtitle.isHighlighted ? styles.highlighted : ''}`}
    >
      {selectedLanguages.map((language) => (
        <p
          key={language}
          className={styles.text}
          style={textStyle}
          onMouseUp={() => {
            const selection = window.getSelection();
            if (selection && selection.toString()) {
              const selectedWord = selection.toString().trim();
              if (selectedWord) {
                onSelectWord(selectedWord, subtitle, 0);
              }
            }
          }}
        >
          {subtitle[language] || `(${language} 자막이 없어요!)`}
        </p>
      ))}
    </div>
  );
}
