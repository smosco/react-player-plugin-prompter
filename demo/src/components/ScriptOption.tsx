import React from 'react';
import styles from './ScriptOption.module.scss';
import { Dispatch, SetStateAction } from 'react';
import { CustomScriptLanguageCode } from '../interfaces/Scripts';

type Mode = 'line' | 'block';

interface ScriptOptionProps {
  mode: Mode;
  availableLanguages: CustomScriptLanguageCode[]; // 전체 가능한 언어 옵션
  selectedLanguages: CustomScriptLanguageCode[]; // 다중 선택 가능한 언어 배열
  setSelectedLanguages: Dispatch<SetStateAction<CustomScriptLanguageCode[]>>;
  setMode: Dispatch<SetStateAction<Mode>>;
}

export default function ScriptOption({
  mode,
  availableLanguages,
  selectedLanguages,
  setSelectedLanguages,
  setMode,
}: ScriptOptionProps) {
  const handleLanguageChange = (language: CustomScriptLanguageCode) => {
    if (selectedLanguages.includes(language)) {
      setSelectedLanguages(
        selectedLanguages.filter((lang) => lang !== language),
      );
    } else {
      setSelectedLanguages([...selectedLanguages, language]);
    }
  };

  return (
    <div className={styles.optionContainer}>
      {/* 모드 선택 버튼 */}
      <div className={styles.displayModeToggleContainer}>
        {['line', 'block'].map((item) => (
          <button
            key={item}
            className={`${mode === item ? styles.active : ''}`}
            onClick={() => setMode(item as Mode)}
          >
            {item === 'line' ? '한 줄씩 보기' : '전체 보기'}
          </button>
        ))}
      </div>

      {/* 언어 선택 */}
      <div className={styles.languageCheckboxContainer}>
        {availableLanguages.map((item) => (
          <label key={item} className={styles.languageOption}>
            <input
              type="checkbox"
              value={item}
              checked={selectedLanguages.includes(item)}
              onChange={() => handleLanguageChange(item)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
}
