import React from 'react';
import { LanguageCode, Script, TextStyle } from '../interfaces/Scripts';
import arrow_back from '../assets/icons/arrow_back.svg';
import arrow_forward from '../assets/icons/arrow_forward.svg';
import { TextDisplay } from './TextDisplay';
import styles from './ReactScriptPlayer.module.scss';

// LineView에 제네릭 T 추가
interface LineViewProps<T extends string = LanguageCode> {
  scripts: Script<T>[];
  selectedLanguages: T[];
  currentScriptIndex: number;
  seekTo: (timeInSeconds: number) => void;
  onSelectWord: (word: string, script: Script<T>, index: number) => void;
  textStyle?: TextStyle;
  PrevButton?: JSX.Element;
  NextButton?: JSX.Element;
}

// LineView 컴포넌트에 제네릭 T를 적용
export function LineView<T extends string = LanguageCode>({
  scripts,
  selectedLanguages,
  currentScriptIndex,
  seekTo,
  onSelectWord,
  textStyle,
  PrevButton,
  NextButton,
}: LineViewProps<T>) {
  const handlePrevious = () => {
    const prevIndex = Math.max(0, currentScriptIndex - 1); // 최소 0
    // console.log('Previous Index:', prevIndex);
    seekTo(scripts[prevIndex].startTimeInSecond); // 이전 자막으로 이동
  };

  const handleNext = () => {
    const nextIndex = Math.min(scripts.length - 1, currentScriptIndex + 1);
    // console.log('Next Index:', nextIndex);
    seekTo(scripts[nextIndex].startTimeInSecond);
  };

  return (
    <div className={styles.lineViewContainer}>
      <div className={styles.skipButtonContainer}>
        {PrevButton ? (
          React.cloneElement(PrevButton, { onClick: handlePrevious })
        ) : (
          <button onClick={handlePrevious}>
            <img src={arrow_back} alt="Back Arrow" />
          </button>
        )}

        {NextButton ? (
          React.cloneElement(NextButton, { onClick: handleNext })
        ) : (
          <button onClick={handleNext}>
            <img src={arrow_forward} alt="Forward Arrow" />
          </button>
        )}
      </div>

      {/* TextDisplay에서 현재 자막과 선택된 언어를 표시 */}
      {scripts[currentScriptIndex] && (
        <TextDisplay
          script={scripts[currentScriptIndex]}
          selectedLanguages={selectedLanguages}
          onSelectWord={onSelectWord}
          textStyle={textStyle}
        />
      )}
    </div>
  );
}
