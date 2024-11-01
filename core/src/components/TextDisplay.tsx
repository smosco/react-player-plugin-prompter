import React from 'react';
import { Script, LanguageCode, TextStyle } from '../interfaces/Scripts';
import styles from './ReactScriptPlayer.module.scss';

// TextDisplay에 제네릭 T 추가
interface TextDisplayProps<T extends string = LanguageCode> {
  script: Script<T>;
  selectedLanguages: T[];
  onSelectWord: (word: string, script: Script<T>, index: number) => void;
  textStyle?: TextStyle;
}

// TextDisplay에 제네릭 T 적용
export function TextDisplay<T extends string = LanguageCode>({
  script,
  selectedLanguages,
  onSelectWord,
  textStyle,
}: TextDisplayProps<T>) {
  return (
    <div
      className={`${styles.textView} ${script.isHighlighted ? styles.highlighted : ''}`}
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
                onSelectWord(selectedWord, script, 0);
              }
            }
          }}
        >
          {script[language] || `(${language} 자막이 없어요!)`}
        </p>
      ))}
    </div>
  );
}
