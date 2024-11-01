import React from 'react';
import { LanguageCode, Script, TextStyle } from '../interfaces/Scripts';
import useThrottling from 'hooks/useThrottling';
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

  // 자막 텍스트 스타일링
  textStyle?: TextStyle;
  // 자막 넘기기 버튼
  PrevButton?: ({ onClick }: { onClick: () => void }) => JSX.Element;
  NextButton?: ({ onClick }: { onClick: () => void }) => JSX.Element;
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
  const totalScripts = scripts.length;

  const handlePrevious = () => {
    if (currentScriptIndex > 0) {
      seekTo(scripts[currentScriptIndex - 1].startTimeInSecond);
    }
  };

  const handleNext = () => {
    if (currentScriptIndex < totalScripts - 1) {
      seekTo(scripts[currentScriptIndex + 1].startTimeInSecond);
    }
  };

  const throttledHandlePrevious = useThrottling({
    buttonClicked: handlePrevious,
  });
  const throttledHandleNext = useThrottling({
    buttonClicked: handleNext,
  });

  return (
    <div className={styles.lineViewContainer}>
      <div className={styles.skipButtonContainer}>
        {PrevButton ? (
          <PrevButton onClick={throttledHandlePrevious} />
        ) : (
          <button onClick={throttledHandlePrevious}>
            <img src={arrow_back} alt="Back Arrow" />
          </button>
        )}
        {NextButton ? (
          <NextButton onClick={throttledHandleNext} />
        ) : (
          <button onClick={throttledHandleNext}>
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
